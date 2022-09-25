---
icon: link
order: 98
---

# Interoperability

Ready to use your `saucer::smartview` to expose your C++ Functions to JavaScript and vice versa ⚡?

---

## Choose a Serializer

A <kbd>Serializer</kbd> is what's used to (de-)serialize all of the data sent to and from JavaScript.  

_Saucer_ currently comes with a default <kbd>JSON-Serializer</kbd>.  
```cpp Consume the <kbd>JSON-Serializer</kbd>
#include <saucer/serializers/json.hpp>
``` 

For more information on <kbd>Serializers</kbd> and on how to create your own, see:
[!ref Serializers](../Advanced/Serializers.md)

## Use a SmartView

To make use of interoperability you need to use a `saucer::smartview`.  
The <kbd>SmartView</kbd> is an extended version of the `saucer::webview`, with interoperability support incorporated.

!!!warning
When using the normal `saucer::smartview` you need to specify the serializer every time you want to exchange data.  

You may want to use a `saucer::simple_smartview` instead.  
Instead of specifying the serializer every time you just specify it once on construction.  

```cpp Example
saucer::simple_smartview<saucer::serializers::json> smartview;
```
!!!

## Expose C++ Functions

Need to call native functions from JavaScript 🍻? We've got that covered!

Use the <kbd>SmartView</kbd>s `expose()` method to make your C++ functions available to JavaScript.

```cpp Method Signature (simplified)
void expose(const std::string &name, const Function &func, bool async = false);
```

!!!
When supplying `true` for <kbd>async</kbd> the exposed function will be run in a new thread.  

This is recommended for heavy or blocking functions.
!!!

+++ Normal SmartView
```cpp Example
smartview.expose<saucer::serializers::json>("your_awesome_function", [](int example)
{
    return example * 100;
});
```
+++ Simple Smartview
```cpp Example
smartview.expose("your_awesome_function", [](int example)
{
    return example * 100;
});
```
+++

!!!warning
Function overloading is not supported when exposing functions.  
When calling `expose()` with an already existing `name` the call will be discarded.
!!!

## Invoke exposed Functions

Alright, now we have exposed a function to JavaScript, but how do we call it?

```js JavaScript
const result = await window.saucer.call('your_awesome_function', [10]);
// Result equals 100
```

!!!
The <kbd>Promise</kbd> returned by `saucer.call` may reject when invalid parameters are supplied.
!!!

That's it! Really easy, isn't it?

## Call JavaScript

You may also want to call JavaScript from C++, no worries, that's really easy too 🚀!  

Use the <kbd>SmartView</kbd>s `eval()` method to call arbitrary JavaScript Code and capture its result!

```cpp Method Signature (simplified)
std::future<Return> eval(const std::string &code, Params &&...params);
```

+++ Normal SmartView
```cpp Example
smartview.eval<float, saucer::serializers::json>("Math.random()");
```
+++ Simple Smartview
```cpp Example
smartview.eval<float>("Math.random()");
```
+++

!!!warning
When calling any blocking methods on the returned `std::future` **in the main-thread** the program will lock up.  

Please only call potentially blocking methods on the returned `std::future` from **another thread** (e.g. when inside an [async callback](#expose-c-functions)).

To still make use of `eval()` while in the main-thread, refer to
[!ref Future Utilities](#future-utilities)
!!!

## Future Utilities

No need to worry, you can still make use of `eval()` from the main-thread 👏!

Due to the nature of `std::future` it is not really all that useful to call `eval()` from the main-thread, because you can't access the result without calling a potentially blocking method of `std::future`, which will in turn cause the program to lock up.

Simply discarding the `std::future` is also not a viable option, because `std::future` will also block on destruction.  

To circumvent these issues, we've provided some utility functions 🔮.

```cpp Include the utils
#include <saucer/utils/future.hpp>
```

### Then

In case you want a callback to be invoked once the `std::future` is ready, you can use `saucer::then()`.

```cpp Example
saucer::then(smartview.eval<float>("Math.random()"), [](float result) 
{
    std::cout << "Result: " << result << std::endl;
});

// or...

smartview.eval<float>("Math.random()") | saucer::then([](float result) 
{
    std::cout << "Result: " << result << std::endl;
});

```

### Forget

Or, if you just want to call some JavaScript code and don't care about the result whatsoever, use `saucer::forget()`.

```cpp Example
saucer::forget(smartview.eval<float>("Math.random()"));

// or...

smartview.eval<float>("Math.random()") | saucer::forget();
```

### All

Have a lot of futures to wait on 🪆? Just use `saucer::all()`!

```cpp Example
auto a = smartview.eval<float>("Math.random()");
auto b = smartview.eval<float>("Math.random()");
auto c = smartview.eval<float>("Math.random()");

auto [random, random2, random3] = saucer::all(a, b, c);
```

## User Defined Types

You may've noticed that it's not possible to exchange user-defined objects out of the box.

Depending on the <kbd>Serializer</kbd> you use, it may be necessary to supply your own specialization for your user defined type. 

To add support for user defined types with <i>Saucer</i>s default <kbd>JSON-Serializer</kbd> please refer to [`nlohmann-json`](https://github.com/nlohmann/json)s official documentation:  
[!ref How do I convert Third Party Types?](https://github.com/nlohmann/json#how-do-i-convert-third-party-types)