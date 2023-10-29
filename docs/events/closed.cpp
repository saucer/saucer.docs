std::function<void()>

smartview.on<saucer::window_event::closed>([]()
{
    std::print("WebView is closed!\n", width, height);
});