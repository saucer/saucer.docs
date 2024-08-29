std::function<void()>

smartview.on<saucer::window_event::closed>([]()
{
    std::println("WebView closed");
});
