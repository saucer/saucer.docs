---
icon: file-code 
order: 100
---

# Serializers

Serializers are the heart of [Interoperability](../Getting-Started/Interoperability.md), they're responsible for (de-)serializing objects so that they can be exchanged between JavaScript and C++ 🧠.

The basic idea of the serializer concept is that all data sent to and from JavaScript will first be serialized so that it can be de-serialized on the other side.

An example to illustrate this further:
> When calling an exposed function from JavaScript, all the given Parameters will be serialized to JSON and will then be deserialized by the C++ SmartView - which will eventually call the exposed function and capture the result of said invocation, serialize it to JSON and finally send it to JavaScript, where it will then be deserialized.

---

## Pre-Existing Serializers

_Saucer_ currently ships the <kbd>JSON-Serializer</kbd> by default.  

It is based on [`nlohmann-json`](https://github.com/nlohmann/json), which is widely used and makes the integration of third-party types fairly easy.  
A lot of STL containers are also supported out of the box.

## Your own Serializer

If the default <kbd>JSON-Serializer</kbd> doesn't fit your use-case you can create your own.  

In the following paragraphs we will walk you through on how the `nlohmann-json` serializer works, so that you can get a basic understanding on what you need to do when creating your own 💪

### Include the required headers

We'll start of by including the required headers:

```cpp 
#include <saucer/serializers/serializer.hpp>
```

### Create data classes

Data Classes hold mandatory internal information and should be extended with data you need to keep a hold of, i.e. between parsing a message and calling a function.  

```cpp
struct json_function_data : public saucer::function_data
{
    nlohmann::json data;
    ~json_function_data() override;
};

struct json_result_data : public saucer::result_data
{
    nlohmann::json data;
    ~json_result_data() override;
};
```

Both structs *carry* <kbd>JSON</kbd> data, that we'll **set** when parsing the messages we receive from JavaScript and **read** when calling the native function.


### Create our Serializer class
```cpp
struct json : public saucer::serializer
{
    public:
    ~json() override;

    public:
    std::string initialization_script() const override;
    std::string java_script_serializer() const override;
    std::shared_ptr<message_data> parse(const std::string &data) const override;

    public:
    template <typename Function> static auto serialize_function(const Function &func);
    template <typename... Params> static auto serialize_arguments(const Params &...params);
    template <typename T> static auto resolve_promise(std::shared_ptr<std::promise<T>> promise);
};
```

* `initialization_script()` returns nothing for our <kbd>JSON-Serializer</kbd>, as we do not need any additional JavaScript-Code to be executed before using the serializer
* `java_script_serializer()` returns `"JSON.stringify"` because all JavaScript objects should be serialized using `JSON.stringify`.

#### Parse

The Parse method will be used to read messages sent from JavaScript.  
It should be able to identify whether or not the message is requesting to call a native function or if it holds the result for a `smartview::eval()` call that was performed.

After identifying the purpose of the message the parse method should return:

* a <kbd>std::shared_ptr</kbd> to [`json_result_data`](#create-data-classes) in case we got the result for an `smartview::eval()` call
* a <kbd>std::shared_ptr</kbd> to [`json_function_data`](#create-data-classes) in case a native function call is requested
* `nullptr` in case we couldn't parse the data


==- The <kbd>JSON-Serializer</kbd> parse method
```cpp
auto parsed = nlohmann::json::parse(data, nullptr, false);
if (!parsed.is_discarded())
{
    if (parsed["id"].is_number_integer())
    {
        if (parsed["params"].is_array() && parsed["name"].is_string())
        {
            auto rtn = std::make_shared<json_function_data>();
            rtn->id = parsed["id"];
            rtn->data = parsed["params"];
            rtn->function = parsed["name"];

            return rtn;
        }

        if (!parsed["result"].is_discarded())
        {
            auto rtn = std::make_shared<json_result_data>();
            rtn->id = parsed["id"];
            rtn->data = parsed["result"];

            return rtn;
        }
    }
}

return nullptr;
```
===

#### Serialize Function

The <kbd>serialize_function</kbd> method returns a `std::function` that can call the passed `Function` when given a [`std::shared_ptr<json_function_data>`](#create-data-classes).  

!!!
The `Function` mentioned here is the same function passed to `smartview::expose()`.
!!!

It should use the data carried by the [`json_function_data`](#create-data-classes) to construct the function parameters for `Function`.  

After successfully invoking the passed `Function` it should return:

* an error, in case parsing failed
* a `std::string`, holding valid JavaScript-Code which evaluates to **the return value of the previous invocation**

==- The <kbd>JSON-Serializer</kbd> serialize_function method
```cpp
return [func](const std::shared_ptr<function_data> &data) -> tl::expected<std::string, error> {
        auto json_message = std::dynamic_pointer_cast<json_function_data>(data);
        using traits = internal::function_traits<Function>;
        using args_t = typename traits::args_t;
        using rtn_t = typename traits::rtn_t;
        static_assert(traits::serializable);

        const auto &params = json_message->data;
        if (params.size() == std::tuple_size_v<args_t>)
        {
            args_t args;
            try
            {
                internal::tuple_visit(args, [&params](const std::size_t &I, auto &arg) { arg = static_cast<std::decay_t<decltype(arg)>>(params.at(I)); });
            }
            catch (const nlohmann::json::type_error &)
            {
                return tl::make_unexpected(error::type_mismatch);
            }

            nlohmann::json rtn;

            if constexpr (std::is_void_v<rtn_t>)
            {
                std::apply(func, args);
            }
            else
            {
                rtn = std::apply(func, args);
            }

            return "JSON.parse(" + nlohmann::json(nlohmann::json(rtn).dump()).dump() + ")"; // ? We dump twice to properly escape
        }

        return tl::make_unexpected(error::argument_count_mismatch);
    };
```
===

#### Serialize Arguments

The <kbd>serialize_arguments</kbd> method should return a `fmt::dynamic_format_arg_store<fmt::format_context>` containing valid JavaScript-Code strings which evaluate to the `...params` passed to it.

!!!
The `...params` mentioned here equal those passed to `smartview::eval`:  

```cpp Example
smartview.eval<int>("Math.pow({},{})", 5, 2)
```

So `5, 2` in case of the example.
!!!

==- The <kbd>JSON-Serializer</kbd> serialize_arguments method
```cpp
fmt::dynamic_format_arg_store<fmt::format_context> args;

auto unpack_args = [&args](const auto &arg) {
    using arg_t = decltype(arg);
    std::string rtn;

    if constexpr (internal::is_args_v<std::decay_t<arg_t>>)
    {
        using tuple_t = internal::arg_to_tuple_v<std::decay_t<arg_t>>;

        internal::tuple_visit(arg, [&rtn](const std::size_t &I, const auto &item) {
            rtn += "JSON.parse(" + nlohmann::json(nlohmann::json(item).dump()).dump() + ")"; // NOLINT
            if ((I + 1) < std::tuple_size_v<tuple_t>)
            {
                rtn += ",";
            }
        });
    }
    else
    {
        rtn = "JSON.parse(" + nlohmann::json(nlohmann::json(arg).dump()).dump() + ")"; // NOLINT
    }

    args.push_back(rtn);
};

(unpack_args(params), ...);
return args;
```
===

#### Resolve Promise

The `resolve_promise` method returns a `std::function` that can resolve the passed `std::promise` when given a [`std::shared_ptr<json_result_data>`](#create-data-classes).

It should use the data carried by the [`json_result_data`](#create-data-classes) to construct the promise result.

Then it should either:

* call `set_exception` on the promise, in case the aforementioned construction fails
* call `set_value` on the promise with the previously constructed object

==- The <kbd>JSON-Serializer</kbd> resolve_promise method
```cpp
return [promise = std::move(promise)](const std::shared_ptr<result_data> &data) mutable {
    auto json_data = std::dynamic_pointer_cast<json_result_data>(data);
    if constexpr (std::is_same_v<T, void>)
    {
        promise->set_value();
    }
    else
    {
        try
        {
            promise->set_value(json_data->data);
        }
        catch (...)
        {
            promise->set_exception(std::current_exception());
        }
    }
};
```
===