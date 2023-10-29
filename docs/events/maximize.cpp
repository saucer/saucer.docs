std::function<void(bool)>

smartview.on<saucer::window_event::maximize>([](bool state)
{
    std::print("WebView is maximized: {}!\n", state);
});