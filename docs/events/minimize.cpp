std::function<void(bool)>

smartview.on<saucer::window_event::minimize>([](bool state)
{
    std::println("WebView was minimized: {}", state);
});
