std::function<void(const std::string &)>

smartview.on<saucer::web_event::title>([](const std::string& title)
{
    std::println("Document Title changed: {}", title);
});
