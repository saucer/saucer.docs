std::function<void()>

smartview.on<saucer::web_event::dom_ready>([]()
{
    std::println("DOM is ready!");
});
