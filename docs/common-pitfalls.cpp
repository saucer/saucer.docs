// begin: execution-order-ill-formed
#include <saucer/smartview.hpp>

int main() 
{
  saucer::smartview webview;
  
  webview.set_size(500, 600);
  webview.set_title("Hello World!");

  webview.set_url("https://github.com");

  webview.expose(
      "add_random",
      [&](float number) {
        auto random = webview.eval<float>("Math.random()").get();
        return number + random;
      },
      true);

  webview.show();
  webview.run();

  return 0;
}
// end: execution-order-ill-formed
// begin: execution-order-fixed
int main() 
{
  saucer::smartview webview;
  webview.set_size(500, 600);
  webview.set_title("Hello World!");

  // red
  webview.set_url("https://github.com");

  webview.expose(
      "add_random",
      [&](float number) {
        auto random = webview.eval<float>("Math.random()").get();
        return number + random;
      },
      true);


  // green
  webview.set_url("https://github.com");
  webview.show();
  webview.run();

  return 0;
}
// end: execution-order-fixed
// begin: run-blocking
int main() 
{
  saucer::smartview webview;
  webview.set_size(500, 600);
  webview.set_title("Hello World!");

  webview.show();
  webview.run();

  webview.set_url("https://github.com");

  return 0;
}
// end: run-blocking
// begin: run-blocking-fixed
int main() 
{
  saucer::smartview webview;
  webview.set_size(500, 600);
  webview.set_title("Hello World!");

  // green
  webview.set_url("https://github.com");

  webview.show();
  webview.run();

  // red
  webview.set_url("https://github.com");

  return 0;
}
// end: run-blocking-fixed
// begin: static-init
saucer::smartview webview;

int main() 
{
  webview.set_size(500, 600);
  webview.set_title("Hello World!");

  webview.set_url("https://github.com");

  webview.show();
  webview.run();

  return 0;
}
// end: static-init
// begin: static-init-fixed
// red
saucer::smartview webview;
// green
std::unique_ptr<saucer::smartview<>> webview;

int main() 
{
  // green
  webview = std::make_unique<saucer::smartview<>>();

  webview->set_size(500, 600);
  webview->set_title("Hello World!");

  webview->set_url("https://github.com");

  webview->show();
  webview->run();

  // green
  webview.reset();

  return 0;
}
// end: static-init-fixed
