std::function<void(const saucer::navigation &)>

smartview.on<saucer::web_event::navigate>([](const saucer::navigation& nav)
{
    if (!nav.new_window())
    {
        return;
    }

    auto new_window = /*...*/;
    new_window->set_url(nav.url());
});
