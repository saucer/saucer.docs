std::function<void(const std::string &)>

smartview.on<saucer::web_event::url_changed>([](const std::string& url)
{
    std::println("New URL loaded: {}", url);
});
