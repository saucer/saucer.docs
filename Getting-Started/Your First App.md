---
icon: browser
order: 99
---

# Your First App

Ready to start your journey 🗺️?

---

## Setup Project

First we'll setup a simple CMake project, once that's done you can continue to the exciting parts like [Interoperability](Interoperability.md) and [Embedding](Embedding.md) 😉!

### Dependencies
First make sure you have all the required dependencies installed.

[!ref](../Dependencies.md)

### Create Project files
   
!!!secondary
This guide assumes you want to get started with a CMake Project or any other build system that either supports vcpkg or CMake Libraries.  

The following steps will describe how to setup a CMake Project.  
In case you don't use CMake and can't get _Saucer_ working in your favorite Build-System, please open a [GitHub Issue](https://github.com/saucer/saucer/issues/new), we may be able to help you there!
!!!

+++ Manual Setup

We first setup a `CMakeLists.txt`, and follow the steps described in  
[!ref](Installation.md#cmake)

The resulting `CMakeLists.txt` should look roughly like this:

```CMake CMakeLists.txt
cmake_minimum_required(VERSION 3.1)
project(your_awesome_app LANGUAGES CXX VERSION 1.0)

# --------------------------------------------------------------------------------------------------------
# Create executable
# --------------------------------------------------------------------------------------------------------

add_executable(${PROJECT_NAME} "main.cpp")
target_compile_features(${PROJECT_NAME} PRIVATE cxx_std_17)
set_target_properties(${PROJECT_NAME} PROPERTIES CXX_STANDARD 17 CXX_EXTENSIONS OFF CXX_STANDARD_REQUIRED ON)

# --------------------------------------------------------------------------------------------------------
# Link libraries
# --------------------------------------------------------------------------------------------------------

include(FetchContent)

FetchContent_Declare(saucer GIT_REPOSITORY "https://github.com/saucer/saucer" GIT_TAG dev)
FetchContent_MakeAvailable(saucer)

target_link_libraries(${PROJECT_NAME} PRIVATE saucer)
```
+++ Saucer-CLI
Want to use the CLI 🤖? Great choice!  
[!ref](Installation.md#setup-saucer-project)
+++

Alright, now that you've got your CMake Project setup, let's get to the fun stuff!

We can now go ahead and create our first <kbd>smartview</kbd> - A advanced webview with JavaScript <-> C++ Interoperability 🎉!

1. Include `smartview` header
```cpp
#include <saucer/smartview.hpp>
```

2. Create a Smartview
```cpp
saucer::smartview smartview;
```

3. Do fun stuff with it 🥳
```cpp
smartview.set_title("Hello World!");
smartview.set_url("https://google.com");

smartview.show();
smartview.run();
```

A complete `main.cpp` could look like this:

==- Example
```cpp main.cpp
#include <saucer/smartview.hpp>

int main()
{
    saucer::smartview smartview;
    
    smartview.set_title("Hello World!");
    smartview.set_url("https://ddg.gg");
    
    smartview.show();
    smartview.run();

    return 0;
}
```
===

<!-- 
---

### Setup Project
First, you need to setup your project.  
We recommend using CMake as your build system.

Start off with creating a folder for your project.  
Continue with creating the required files.

>💡 Instead of creating the required files manually you can also let the CLI set the project up for you automatically
> ```
> saucer init <name>
> ```

==- CMakeLists.txt
```cmake
cmake_minimum_required(VERSION 3.1)
project(minimal_example LANGUAGES CXX VERSION 1.0)

# --------------------------------------------------------------------------------------------------------
# Create executable
# --------------------------------------------------------------------------------------------------------

add_executable(${PROJECT_NAME} "main.cpp")
target_compile_features(${PROJECT_NAME} PRIVATE cxx_std_17)
set_target_properties(${PROJECT_NAME} PROPERTIES CXX_STANDARD 17 CXX_EXTENSIONS OFF CXX_STANDARD_REQUIRED ON)

# --------------------------------------------------------------------------------------------------------
# Link libraries
# --------------------------------------------------------------------------------------------------------

include(FetchContent)

FetchContent_Declare(saucer GIT_REPOSITORY "https://github.com/saucer/saucer" GIT_TAG dev)
FetchContent_MakeAvailable(saucer)

target_link_libraries(${PROJECT_NAME} PRIVATE saucer)
```
==- main.cpp
```cpp
#include <saucer/smartview.hpp>

int main()
{
    return 0;
}
```
===

### Creating a WebView

After setting up your project you can go ahead and create your first WebView!  

```cpp
saucer::smartview webview;
webview.set_title("Hello World!");
webview.set_url("https://google.com");

webview.show();
webview.run();
``` -->
