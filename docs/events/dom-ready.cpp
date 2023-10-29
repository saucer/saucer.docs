std::function<void()>

smartview.on<saucer::web_event::dom_ready>([]()
{
    std::print("DOM is ready!\n");
});