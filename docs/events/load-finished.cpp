std::function<void()>

smartview.on<saucer::web_event::load_finished>([]()
{
    std::println("Web-Page finished loading!");
});
