---
icon: link
order: 1
---

# Interoperability

_Saucer_ allows you to easily expose C++ **functions and variables** to JavaScript.  
You can also evaluate JavaScript-Code and capture its result.

Interoperability requires the use of the <kbd>smartview</kbd> in combination with a <kbd>serializer</kbd>.  
_Sacuer_ comes with a <kbd>JSON-Serializer</kbd> by default.

All of the `expose` functions require you to supply the <kbd>serializer</kbd> for each call.  
To work around this you can make use of the `simple_smartview`.

+++ Normal Smartview
||| Example
```cpp
saucer::smartview smartview;
saucer::variable<int> synced_int;

smartview.expose<saucer::serializers::json>("synced_int", synced_int);
```
|||
+++ Simple Smartview
||| Example
```cpp
saucer::simple_smartview<saucer::serializers::json> smartview;
saucer::variable<int> synced_int;

smartview.expose("synced_int", synced_int);
```
|||
+++

## Exposing Functions

Exposing functions is as easy as calling the `expose` function and giving it a <kbd>name</kbd> and a <kbd>function</kbd>.

||| Example
```cpp
smartview.expose("test_function", [](const std::string& some_string, int some_int)
{
    std::cout << "Got" << some_string << std::endl;
    return some_int * 20 + 5;
});
```
|||

!!!danger Note
All parameters of the function and the return type *must* be serializable by <kbd>nlohmann::json</kbd> <sub><sup>(If you're using the default <kbd>serializer</kbd>)</sub></sup>.  
In case one of your types is not supported by default you can [allow it to be serialized](https://github.com/nlohmann/json#how-do-i-convert-third-party-types).
!!!
!!!warning Note
Function overloading is not allowed for exposed functions, meaning there can only be one function with the same name.
!!!

## Exposing Variables

To expose a variable you need to wrap it in a <kbd>variable</kbd>.  
`saucer::variable` is a container like wrapper that can detect changes on itself.

Any changes to the <kbd>variable</kbd> on the c++ side will be automatically transferred to JavaScript.
The exposed <kbd>variable</kbd> in JavaScript is wrapped in a <kbd>Proxy</kbd>, if you assign anything to it the c++ variable will also be updated.

||| Example
```cpp C++
saucer::variable<int> test(10);
smartview.expose("test", test);

test.assign(30);
```
```js JavaScript
console.log(window.test.valueOf()); // -> Will print 30
window.test.value = 20;
```
```cpp C++
std::cout << test.read() << std::endl; // -> Will print 20
```
|||

### Usage of Variable

To assign to a variable use the `assign` method.
To read the current value of the variable use the `read` method.

If you need to freely work with the variable you can make use of the `modify` method, it returns a proxy to the variable which will allow you to access the raw value and work with it.  
The proxy will detect any changes when it is destructed.

||| Example
```cpp
saucer::variable<std::vector<int>> a_vector;

{
    auto writable_vector = a_vector.modify();
    writable_vector->push_back(10);
    writable_vector->push_back(20);
    writable_vector->push_back(30);

    for (const auto& item : *writable_vector)
    {
        std::cout << item << std::endl;
    }
}

a_vector.assign(std::vector<int>{});
std::vector<int> a_copy = a_vector.read();
```
|||