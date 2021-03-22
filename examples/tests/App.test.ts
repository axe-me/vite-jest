

import { mount } from "@vue/test-utils";
import App from "../src/App.vue";


test("uses mounts", async () => {
  const wrapper = mount(App);
  expect(wrapper.html()).toBe("<!---->");
});
