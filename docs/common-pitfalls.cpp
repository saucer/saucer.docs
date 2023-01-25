// begin: execution-order-ill-formed
#include <saucer/serializers/json.hpp>
#include <saucer/smartview.hpp>

using smartview = saucer::simple_smartview<saucer::serializers::json>;

int main() {
  smartview webview;
  webview.set_size(500, 600);
  webview.set_title("Hello World!");

  webview.serve("index.html");

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
int main() {
  smartview webview;
  webview.set_size(500, 600);
  webview.set_title("Hello World!");

  // red
  webview.serve("index.html");

  webview.expose(
      "add_random",
      [&](float number) {
        auto random = webview.eval<float>("Math.random()").get();
        return number + random;
      },
      true);


  // green
  webview.serve("index.html");
  webview.show();
  webview.run();

  return 0;
}
// end: execution-order-fixed