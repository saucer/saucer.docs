std::function<saucer::policy()>

smartview.on<saucer::window_event::close>([]()
{
    std::println("Preventing a close!");
    return saucer::policy::block;
});
