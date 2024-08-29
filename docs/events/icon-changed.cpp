std::function<void(const saucer::icon &)>

smartview.on<saucer::web_event::icon_changed>([](const saucer::icon& icon)
{
    std::println("Favicon changed!");
});
