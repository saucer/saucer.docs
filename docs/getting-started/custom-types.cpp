#include <saucer/serializers/json.hpp>
#include <saucer/smartview.hpp>
#include <string>

using smartview = saucer::simple_smartview<saucer::serializers::json>;

struct custom_type {
  float some_float;
  std::string some_string;
};

namespace nlohmann {
template <> struct adl_serializer<custom_type> {
  static void to_json(json &j, const custom_type &c) {
    j["some_float"] = c.some_float;
    j["some_string"] = c.some_string;
  }

  static void from_json(const json &j, custom_type &c) {
    c = {j["some_float"], j["some_string"]};
  }
};
} // namespace nlohmann

int main() {
  smartview webview;
  webview.set_size(500, 600);
  webview.set_title("Hello World!");

  webview.expose(
      "add_random",
      [&](custom_type c) {
        auto random = webview.eval<float>("Math.random()").get();
        c.some_float += random;
        return c;
      },
      true);

  webview.serve("index.html");
  webview.show();
  webview.run();

  return 0;
}