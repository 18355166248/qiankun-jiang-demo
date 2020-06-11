import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "assets/css/normalize.css";
import "assets/css/common.css";
import {
  Container,
  Header,
  Aside,
  Main,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
} from "element-ui";
import startQiankun from "./qiankun";

Vue.config.productionTip = false;

startQiankun();

Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#main-app");
