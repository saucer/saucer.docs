---
icon: archive
order: 1
---

# Plugins

!!!
Currently _Saucer_ ships with no in-house plugins, however, [a  multitude of plugins are planned](../README.md#roadmap) 
!!!

Plugins are used to extend the functionality exposed to JavaScript.  

### Creating a Plugin

First, `#include <saucer/plugin/plugin.hpp>`, then simply create a class that inherits from `saucer::plugin`.

||| Example
```cpp
class my_plugin : public saucer::plugin
{
  public:
    void load(saucer::smartview &smartview) override
    {
        smartview.expose<saucer::serializers::json>("my_awesome_feature", []() { /*...*/ });
    }

    std::string get_name() const override
    {
        return "my_plugin";
    }

    std::string get_version() const override
    {
        return "1.0.0";
    }
};
```
|||

Then you can simply add your plugin to the smartview any time:

||| Example
```cpp
smartview.add_plugin<my_plugin>();
```
|||
