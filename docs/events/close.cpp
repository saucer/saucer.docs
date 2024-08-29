std::function<bool()>

smartview.on<saucer::window_event::close>([]()
{
    std::println("Preventing a close!");
    return true;
});
