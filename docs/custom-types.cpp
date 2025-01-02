#include <saucer/smartview.hpp>

// green-start
struct custom_data 
{
  int field;
};

template <> 
struct glz::meta<custom_data> 
{
  using T = custom_data;
  static constexpr auto value = object( //
      "field", &T::field                //
  );
};
// green-end

int main() 
{
  auto app = saucer::application::init({
      .id = "hello-world",
  });

  saucer::smartview smartview{{
      .application = app,
  }};

  smartview.set_title("Hello World!");

  // highlight-next-line
  smartview.expose("add_ten", [](const custom_data &data) { 
    return data.field + 10; 
  });

  smartview.set_url("https://google.com");
  smartview.show();

  app->run();

  return 0;
}
