---
icon: code-square
order: 0
---

# Modules

!!!
Currently _Saucer_ ships with no in-house modules, however, [a  multitude of modules are planned](../README.md#roadmap) 
!!!

Modules are a more powerful version of [Plugins](Plugins.md).  

They can access the underlying _SmartView_ as well as platform specific internals of the _Window_ and _WebView_.

### Creating a Module

First, `#include <saucer/module/module.hpp>`, then include the implementation header based on your current platform, i.e. `#include <saucer/module/module.qt5.hpp>` on Linux when using the default backend.

Also, make sure to enable modules:
||| CMakeLists.txt
``` cmake
set(saucer_modules ON)

# Then include saucer, for example through FetchContent

include(FetchContent)

FetchContent_Declare(saucer GIT_REPOSITORY "https://github.com/saucer/saucer")
FetchContent_MakeAvailable(saucer)

target_link_libraries(<target> saucer)
```
|||

Then create templated class that inherits from `saucer::module`.

||| Example
```cpp
template <saucer::backend_type Backend> class my_awesome_module : public saucer::module<Backend>
{
  protected:
    using saucer::module<Backend>::m_webview_impl;
    using saucer::module<Backend>::m_window_impl;
    using saucer::module<Backend>::module;

    std::string get_name() const override
    {
        return "example module";
    }

    std::string get_version() const override
    {
        return "1.0.0";
    }

  public:
    void my_awesome_feature()
    {
        if constexpr (Backend == saucer::backend_type::qt)
        {
            QWebEngineView *qwebengine = m_webview_impl->web_view;
            qwebengine->setUrl(QUrl("https://saucer.github.io"));
        }
    }
};
```
|||

Then you can simply add your plugin to the smartview:

+++ Normal Smartview
```cpp
auto smartview = saucer::modularized_smartview<my_awesome_module>();
```
+++ Simple Smartview
```cpp
auto smartview = saucer::modularized_simple_smartview<saucer::serializers::json, my_awesome_module>();
```
+++