#include <saucer/smartview.hpp>

int main() 
{
  saucer::smartview webview;

  webview.set_size(500, 600);
  webview.set_title("Hello World!");

  webview.expose(
      "add_random",
      [&](float number) {
        auto random = webview.evaluate<float>("Math.random()").get();
        return number + random;
      },
      true);

  webview.serve("index.html");
  webview.show();
  webview.run();

  return 0;
}
