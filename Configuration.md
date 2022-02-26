---
label: Configuration
icon: gear
order: 2
---

# Configuration

To configure _Saucer_ you can adjust the following settings in your `CMakeLists.txt` before including the library.

+++ Tests
Whether or not to build tests, default `OFF`.

```cmake
set(saucer_tests <ON/OFF>)
```
+++ Examples
Whether or not to build examples, default `OFF`.

```cmake
set(saucer_examples <ON/OFF>)
```
+++ Smartview
Whether or not to build the smartview, default `ON`.

```cmake
set(saucer_smartview <ON/OFF>)
```
+++ Shared-Library
Whether or not to build a shared library for interop, default `OFF`.

```cmake
set(saucer_shared <ON/OFF>)
```
+++ Backend-Type
Defines the backend to be used, default `Default`.

```cmake
set(saucer_backend <Default/Qt/Qt6/WebView2>)
```
!!!
WebView2 is Windows only
!!!
+++