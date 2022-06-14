---
icon: browser
order: 3
---

This page describes how to setup a minimal saucer application.

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

FetchContent_Declare(saucer GIT_REPOSITORY "https://github.com/saucer/saucer")
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
```
