std::function<void(const saucer::state &)>

smartview.on<saucer::web_event::load>([](const saucer::state& state)
{
    std::println("Loading progressed");
});
