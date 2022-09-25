---
icon: plug
order: 97
---

# Events

_Saucer_ implements an easy to use <kbd>Event-System</kbd> 🎁.  

---

## Register Event Callbacks

To register an event-callback, simply call the `.on` method of your `webview` / `smartview`.  

The `on()` method takes the <kbd>Event-Type</kbd> as a template parameter and the callback to register as it's single argument - it returns an <kbd>Event-ID</kbd>, which can later be used to unregister the callback.


```cpp Example
smartview.on<saucer::window_event::resize>([](std::size_t width, std::size_t height)
{
   // ... 
});
```

## Unregister Event Callbacks

To remove a registered callback, simply use the <kbd>Event-ID</kbd> returned by the `on()` method and pass it to `remove()`.

```cpp Example
auto id = smartview.on<saucer::window_event::resize>([](std::size_t width, std::size_t height)
{
   // ...
});

smartview.remove(saucer::window_event::resize, id);
```

Alternatively you can also clear all callbacks registered to a specific <kbd>Event-Type</kbd> by using the `clear()` method.

```cpp Example
smartview.on<saucer::window_event::resize>([](std::size_t width, std::size_t height)
{
   // ...
});

smartview.clear(saucer::window_event::resize);
```

## Window Events

### Resize

The <kbd>Resize</kbd> event is fired when the user resizes the window.

```cpp Callback Signature
std::function<void(std::size_t width, std::size_t height)>
```

==- Example Usage
```cpp
smartview.on<saucer::window_event::resize>([](std::size_t width, std::size_t height)
{
   std::cout << "Width: " << width << " - Height: " << height << std::endl;  
});
```
===

### Close

The <kbd>Close</kbd> event is fired when the user tries to close the window.  

```cpp Callback Signature
std::function<bool()>
```

!!!
The callback can prevent the window from being closed by returning `true`.
!!!


==- Example Usage
```cpp
smartview.on<saucer::window_event::close>([]()
{
    // Always prevent the window from closing.
    return true;
});
```
===

## WebView Events

### URL-Changed

The <kbd>URL-Changed</kbd> event is fired when the webview navigates.

```cpp Callback Signature
std::function<void(const std::string& url)>
```

==- Example Usage
```cpp
smartview.on<saucer::web_event::url_changed>([](const std::string& url)
{
    std::cout << "WebView navigated: " << url << std::endl;
});
```
===