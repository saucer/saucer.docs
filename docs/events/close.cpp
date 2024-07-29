std::function<bool()>

smartview.on<saucer::window_event::close>([]()
{
    std::print("Preventing a close!\n", width, height);
    return true;
});