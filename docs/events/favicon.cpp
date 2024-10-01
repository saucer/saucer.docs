std::function<void(const saucer::icon &)>

smartview.on<saucer::web_event::favicon>([](const saucer::icon& icon)
{
    std::println("Favicon changed!");
});
