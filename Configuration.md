---
label: Configuration
icon: gear
order: 2
---

# Configuration

To configure _Saucer_ you can adjust the following settings in your `CMakeLists.txt` before including the library.

=== Tests
Whether or not to build tests, default `OFF`.

```cmake
set(saucer_tests <ON/OFF>)
```
==- Examples
Whether or not to build examples, default `OFF`.

```cmake
set(saucer_examples <ON/OFF>)
```
==- Modules
Whether or not to enable modules, default `OFF`.

```cmake
set(saucer_smartview <ON/OFF>)
```
==- Smartview
Whether or not to build the smartview, default `ON`.

```cmake
set(saucer_smartview <ON/OFF>)
```
==- Shared-Library
Whether or not to build a shared library for interop, default `OFF`.

```cmake
set(saucer_shared <ON/OFF>)
```
==- Remote WebView2
Whether or not to  use NuGet to obtain WebView2, default `ON`.

```cmake
set(saucer_shared <ON/OFF>)
```
==- Prefer Remote
Whether or not to download dependencies automatically instead of using those already provided, default `OFF`.

```cmake
set(saucer_shared <ON/OFF>)
```
==- Backend-Type
Defines the backend to be used, default `Default`.

```cmake
set(saucer_backend <Default/Qt/Qt6/WebView2>)
```
!!!
WebView2 is Windows only
!!!
==-