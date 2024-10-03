std::function<saucer::policy(const saucer::navigation &)>

smartview.on<saucer::web_event::navigate>([](const saucer::navigation& nav)
{
    if (!nav.new_window())
    {
        return saucer::policy::allow;
    }

    auto new_window = /*...*/;
    new_window->set_url(nav.url());

    return saucer::policy::block;
});
