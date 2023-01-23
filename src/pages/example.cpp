#include <saucer/serializers/json.hpp>
#include <saucer/smartview.hpp>

using smartview = saucer::simple_smartview<saucer::serializers::json>;

int main() {
  smartview webview;
  webview.set_size(500, 600);
  webview.set_title("Hello World!");

  webview.expose(
      "add_random",
      [](float number) {
        auto random = webview.eval<float>("Math.random()").get();
        return number + random;
      },
      true);

  webview.serve("index.html");
  webview.show();
  webview.run();

  return 0;
}