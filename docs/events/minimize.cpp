std::function<void(bool)>

smartview.on<saucer::window_event::minimize>([](bool state)
{
    std::print("WebView is minimized: {}!\n", state);
});