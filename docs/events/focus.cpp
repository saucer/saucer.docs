std::function<void(bool)>

smartview.on<saucer::window_event::focus>([](bool focus)
{
    std::println("WebView is focused: {}!", focus);
});
