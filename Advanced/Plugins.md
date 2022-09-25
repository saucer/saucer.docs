---
icon: package 
order: 97
---

# Plugins

Plugins can be used to re-useably extend the functionality that is exposed to JavaScript and can be loaded dynamically - any time - from C++.

---

## Your own Plugin

Creating your own <kbd>Plugin</kbd> is really simple 🔨!


### Include the required headers

We'll start of by including the required headers:

```cpp
#include <saucer/plugin/plugin.hpp>
```

### Create your Plugin

Now go ahead and create your <kbd>Plugin</kbd> class, which should inherit from `saucer::plugin`.


```cpp my_awesome_plugin.hpp
class my_awesome_plugin : public saucer::plugin
{
  public:
    void load(saucer::smartview &smartview) override;
    std::string get_version() const override;
    std::string get_name() const override;
};
```

* `get_name()` should return the name for your awesome <kbd>Plugin</kbd>
* `get_version()` should return the version of your awesome <kbd>Plugin</kbd>
* `load()` is called on load and can fully access the <kbd>SmartView</kbd>

That's it! You've now created your first plugin 🥳!


### Use your Module

All that's left now is to use your module 🏗️!

```cpp
smartview.add_plugin<my_awesome_plugin>();
```