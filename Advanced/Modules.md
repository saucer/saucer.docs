---
icon: container 
order: 99
---

# Modules

Modules can be used to extend the functionality of the <kbd>SmartView</kbd>.  
Unlike [Plugins](Plugins.md), they have access to the platform-dependent implementation details of _Saucer_ - Which means they can fully tinker with the underlying <kbd>WebView</kbd> / <kbd>Window</kbd>.

Another difference to plugins is that <kbd>Module</kbd>s can not be loaded dynamically.

---

## Pre-Requisites

To avoid unresolved symbol warnings you should enable <kbd>Module</kbd> Support in _Saucer_.  

Doing so will _publicly_ link the required libraries from within _Saucer_ so that you don't have to worry about linking platform specific libraries like Qt.

To enable Module-Support in CMake, run the following piece of code **before configuring saucer**:
```CMake
set(saucer_modules ON)
```

## Your own Module

If you've made sure that all pre-requisites are full-filled you can go ahead and implement your own <kbd>Module</kbd> 🎉

### Include the required headers

We'll start of by including the required headers:

```cpp
#include <saucer/module/module.hpp>
```

### Create your Module

Now go ahead and create your <kbd>Module</kbd> class, which should inherit from `saucer::module`.

```cpp my_awesome_module.hpp
template <saucer::backend_type Backend> class my_awesome_module : public saucer::module<Backend>
{
  protected:
    using saucer::module<Backend>::m_webview_impl;
    using saucer::module<Backend>::m_window_impl;
    using saucer::module<Backend>::module;

    std::string get_name() const override;
    std::string get_version() const override;

  public:
    void my_awesome_feature();
};
```

* `get_name()` should return the name for your awesome <kbd>Module</kbd>
* `get_version()` should return the version of your awesome <kbd>Module</kbd>

`my_awesome_feature` is the method that will later be available in the <kbd>SmartView</kbd>, and it should be implemented for all Backend-Types (`Qt`, `Qt6`, `WebView2`).

To implement `my_awesome_feature` for any backend-type, we advise creating a `cpp` file for that specific backend-type, in which you specialize the method.

Which should result in something along the lines of:

```cpp my_awesome_module.qt5.cpp
#include "my_awesome_module.hpp"
#include <saucer/module/module.qt5.hpp>

template <>
void my_awesome_module<saucer::backend_type::qt>::my_awesome_feature()
{
    QWebEngineView *qwebengine = m_webview_impl->web_view;
    qwebengine->setUrl(QUrl("https://saucer.github.io"));
}
```

That's it! You've now created your first module 🥳!

### Use your Module

All that's left now is to use your module 🔧!

+++ Normal SmartView
```cpp
auto smartview = saucer::modularized_smartview<my_awesome_module>();
smartview.my_awesome_feature();
```
+++ Simple SmartView
```cpp
auto smartview = saucer::modularized_simple_smartview<saucer::serializers::json, my_awesome_module>();
smartview.my_awesome_feature();
```
+++