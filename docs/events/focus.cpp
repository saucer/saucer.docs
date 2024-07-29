std::function<void(bool)>

smartview.on<saucer::window_event::focus>([](bool focus)
{
    std::print("WebView is focused: {}!\n", focus);
});