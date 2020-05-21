import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button, Select } from "element-ui";

Vue.use(Button);
Vue.use(Select);
/**
 * 按需引入 element ui
 * 1. 安装 npm install babel-plugin-component -D
 * 2. .babelrc 修改配置文件
 */

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
