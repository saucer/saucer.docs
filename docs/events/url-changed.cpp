std::function<void(const std::string &)>

smartview.on<saucer::web_event::url_changed>([](const std::string& url)
{
    std::print("New URL loaded: {}\n", url);
});