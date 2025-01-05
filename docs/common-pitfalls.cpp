// begin: constructor-thread-safety
#include <saucer/smartview.hpp>

int main() 
{
  auto app = saucer::application::init({
      .id = "pitfalls",
  });

  saucer::smartview webview{{
      .application = app,
  }};

  webview.set_size(500, 600);
  webview.set_title("Hello World!");

  webview.expose(
    "open",
    [app](const std::string &url)
    {
        auto webview = std::make_shared<saucer::smartview<>>(saucer::preferences{.application = app});

        webview->set_url(url);
        webview->show();

        webview->set_dev_tools(true);

        // Short explination for the "close" function:
        //
        // - What you should know:
        //   * When a webview goes out of scope, it will be closed
        //
        // - What happens here:
        //   * as we dont want the webview to go out of scope after "open" is executed, we make a shared_ptr
        //   * then we capture this shared_ptr in the exposed close function
        //   * when "close" is invoked, we reset the last reference to the webview
        //   * the webview now closes :)
        // 
        webview->expose("close", [webview]() mutable { webview.reset(); });
    },
    saucer::launch::async);

  webview.set_url("https://github.com");
  webview.show();

  app->run();

  return 0;
}
// end: constructor-thread-safety
// begin: constructor-thread-safety-fixed
#include <saucer/smartview.hpp>

int main() 
{
  auto app = saucer::application::init({
      .id = "pitfalls",
  });

  saucer::smartview webview{{
      .application = app,
  }};

  webview.set_size(500, 600);
  webview.set_title("Hello World!");

  webview.expose(
    "open",
    [app](const std::string &url)
    {
        // red
        auto webview = std::make_shared<saucer::smartview<>>(saucer::preferences{.application = app});
        // green
        auto webview = std::shared_ptr{app->make<saucer::smartview<>>(saucer::preferences{.application = app})};

        webview->set_url(url);
        webview->show();

        webview->set_dev_tools(true);

        // Short explination for the "close" function:
        //
        // - What you should know:
        //   * When a webview goes out of scope, it will be closed
        //
        // - What happens here:
        //   * as we dont want the webview to go out of scope after "open" is executed, we make a shared_ptr
        //   * then we capture this shared_ptr in the exposed close function
        //   * when "close" is invoked, we reset the last reference to the webview
        //   * the webview now closes :)
        // 
        webview->expose("close", [webview]() mutable { webview.reset(); });
    },
    saucer::launch::async);

  webview.set_url("https://github.com");
  webview.show();

  app->run();

  return 0;
}
// end: constructor-thread-safety-fixed
// begin: execution-order-ill-formed
#include <saucer/smartview.hpp>

int main() 
{
  auto app = saucer::application::init({
      .id = "pitfalls",
  });

  saucer::smartview webview{{
      .application = app,
  }};
  
  webview.set_size(500, 600);
  webview.set_title("Hello World!");

  webview.set_url("https://github.com");

  webview.expose(
      "add_random",
      [&](float number) {
        auto random = webview.evaluate<float>("Math.random()").get();
        return number + random;
      },
      saucer::launch::async);

  webview.show();
  app->run();

  return 0;
}
// end: execution-order-ill-formed
// begin: execution-order-fixed
int main() 
{
  auto app = saucer::application::init({
      .id = "pitfalls",
  });

  saucer::smartview webview{{
      .application = app,
  }};

  webview.set_size(500, 600);
  webview.set_title("Hello World!");

  // red
  webview.set_url("https://github.com");

  webview.expose(
      "add_random",
      [&](float number) {
        auto random = webview.evaluate<float>("Math.random()").get();
        return number + random;
      },
      saucer::launch::async);

  // green
  webview.set_url("https://github.com");
  webview.show();
  
  app->run();

  return 0;
}
// end: execution-order-fixed
// begin: run-blocking
int main() 
{
  auto app = saucer::application::init({
      .id = "pitfalls",
  });

  saucer::smartview webview{{
      .application = app,
  }};

  webview.set_size(500, 600);
  webview.set_title("Hello World!");

  webview.show();
  app->run();

  webview.set_url("https://github.com");

  return 0;
}
// end: run-blocking
// begin: run-blocking-fixed
int main() 
{
  auto app = saucer::application::init({
      .id = "pitfalls",
  });

  saucer::smartview webview{{
      .application = app,
  }};

  webview.set_size(500, 600);
  webview.set_title("Hello World!");

  // green
  webview.set_url("https://github.com");

  webview.show();
  app->run();

  // red
  webview.set_url("https://github.com");

  return 0;
}
// end: run-blocking-fixed
