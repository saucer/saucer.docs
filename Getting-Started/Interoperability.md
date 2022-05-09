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
smartview.expose<saucer::serializers::json>("test", [](){return 10;});
```
|||
+++ Simple Smartview
||| Example
```cpp
saucer::simple_smartview<saucer::serializers::json> smartview;
smartview.expose("test", [](){return 10;});
```
|||
+++

## Exposing Functions

Exposing functions is as easy as calling the `expose` function and giving it a <kbd>name</kbd> and a <kbd>function</kbd>.

||| Example
```cpp C++
smartview.expose("test_function", [](const std::string& some_string, int some_int)
{
    std::cout << "Got" << some_string << std::endl;
    return some_int * 20 + 5;
});
```
```js JavaScript
console.log(await window.saucer.call("test_function", ["Test", 10])); // -> Will print 205
```
|||

!!!danger Note
All parameters of the function and the return type *must* be serializable by <kbd>nlohmann::json</kbd> <sub><sup>(If you're using the default <kbd>serializer</kbd>)</sub></sup>.  
In case one of your types is not supported by default you can [allow it to be serialized](https://github.com/nlohmann/json#how-do-i-convert-third-party-types).
!!!
!!!warning Note
Function overloading is not allowed for exposed functions, meaning there can only be one function with the same name.
!!!

## Evaluating JavaScript

You can also evaluate JavaScript code and capture its result.
To do so call the `eval` function.

||| Example
```cpp
 smartview.eval<float>("Math.random()")->then([](float result) { std::cout << "Random: " << result << std::endl; });
 smartview.eval<int>("Math.pow({},{})", 5, 2)->then([](int result) { std::cout << "Pow(5,2): " << result << std::endl; });
```
|||