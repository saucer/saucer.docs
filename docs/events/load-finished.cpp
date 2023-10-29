std::function<void()>

smartview.on<saucer::web_event::load_finished>([]()
{
    std::print("Web-Page finished loading!\n");
});