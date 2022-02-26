---
icon: plug
order: 2
---

# Events

After creating your first WebView you may be interested in registering events!  

### Registering Events

Event-Callbacks can be registered by calling the `on` method.

The `on` method should be called like so:

```cpp
window.on<event_type>(callback);
``` 

||| Example
```cpp
window.on<saucer::window_event::close>([]() -> bool {
    // Prevent close
    return true;
});
```
|||

### Removing Events

The `on` method returns an <kbd>id</kbd>.  
This <kbd>id</kbd> can be used to unregister an event by calling the `unregister` method.

||| Example
```cpp
auto close_id = window.on<saucer::window_event::close>([]() -> bool {
    // Prevent close
    return true;
});
window.unregister(saucer::window_event::close, close_id);
```
|||

You can also remove all events of a specific type at once

||| Example
```cpp
window.clear(saucer::window_event::close);
```
|||

## Window Events

+++ Resize
> The resize event is fired when the window is resized.  

Callback-Type: `void(std::size_t, std::size_t)`

+++ Close

> The close event is fired when the window is about to close.  

Callback-Type: `bool()`  
!!!
If you return `true` from within your callback the close event will be canceled and the window will stay open.  
!!!
+++

## WebView Events

+++ Url-Changed
> The url-changed event is fired when the webview navigates to a new page.

Callback-Type: `void(const std::string &)`
+++