std::function<void(const std::string &)>

smartview.on<saucer::web_event::title_changed>([](const std::string& title)
{
    std::println("Document Title changed: {}", title);
});
