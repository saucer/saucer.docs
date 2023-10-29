std::function<void()>

smartview.on<saucer::web_event::load_started>([]()
{
    std::print("Web-Page started loading!\n");
});