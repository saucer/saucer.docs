std::function<void()>

smartview.on<saucer::web_event::load_started>([]()
{
    std::println("Web-Page started loading!");
});
