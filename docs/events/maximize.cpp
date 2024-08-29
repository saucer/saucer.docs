std::function<void(bool)>

smartview.on<saucer::window_event::maximize>([](bool state)
{
    std::println("WebView was maximized: {}", state);
});
