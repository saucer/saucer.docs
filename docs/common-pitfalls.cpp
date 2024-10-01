// begin: execution-order-ill-formed
#include <saucer/smartview.hpp>

int main() 
{
  auto app = saucer::application::acquire({
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
  auto app = saucer::application::acquire({
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
  auto app = saucer::application::acquire({
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
  auto app = saucer::application::acquire({
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
