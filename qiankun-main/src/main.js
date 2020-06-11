import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import startQiankun from "./qiankun";

Vue.config.productionTip = false;

startQiankun();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#main-app");
