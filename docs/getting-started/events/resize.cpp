std::function<void(int width, int height)>

smartview.on<saucer::window_event::resize>([](int width, int height)
{
    std::print("Width: {}, Height: {}\n", width, height);
});