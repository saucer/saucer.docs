std::function<void(const std::string &)>

smartview.on<saucer::web_event::navigated>([](const std::string& url)
{
    std::println("Navigated: {}", url);
});
