std::function<void(bool)>

smartview.on<saucer::window_event::decorated>([](bool decorated)
{
    std::println("WebView is decorated: {}", decorated);
});
