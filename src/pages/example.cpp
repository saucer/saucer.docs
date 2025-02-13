#include <saucer/smartview.hpp>

int main()
{
    auto app = saucer::application::init({
        .id = "example",
    });

    saucer::smartview webview{{
        .application = app,
    }};

    webview.set_size(900, 700);
    webview.set_title("Hello World!");

    webview.expose(
        "add_random",
        [&](float number)
        {
            auto random = webview.evaluate<float>("Math.random()").get();
            return number + random;
        },
        saucer::launch::async);

    webview.set_file("index.html");
    
    webview.show();
    app->run();

    return 0;
}
