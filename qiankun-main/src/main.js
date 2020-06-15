import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'assets/css/normalize.css'
import 'assets/css/common.css'
import {
  Container,
  Header,
  Aside,
  Main,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Button,
  Message,
} from 'element-ui'
import { registerQiankun } from './qiankun'
import { start, setDefaultMountApp, runAfterFirstMounted } from 'qiankun'
import { mockXHR } from '@/mock'
import { getAppConfig } from '@/api/menu'
import actions from '@/qiankun/share'

mockXHR()

Vue.config.productionTip = false

Vue.prototype.$actions = actions

actions.onGlobalStateChange((state) => {
  console.log('主应用 main.js', state)
})

// 异步加载子应用

// startQiankun()

Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Button)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#main-app')

getAppConfig()
  .then(({ data }) => {
    store.commit('setMenu', data)
    if (data.length === 0) {
      return Message({
        type: 'error',
        message: '没有可以注册的子应用数据',
      })
    }

    const isDev = process.env.NODE_ENV === 'development'
    let defaultApp

    const childApps = []

    data.forEach((item) => {
      childApps.push({
        name: item.id,
        entry: isDev ? item.devEntry : item.depEntry,
        container: item.container,
        activeRule: item.routerBase,
        props: {
          age: 'SMegalo',
          routes: item.children,
        },
      })

      if (item.isDefault) {
        defaultApp = item.routerBase
      }

      registerQiankun(childApps)

      if (!defaultApp) defaultApp = data[0].routerBase

      // setDefaultMountApp(defaultApp)

      runAfterFirstMounted((app) => {
        console.log('第一个子应用加载完毕', app)
      })

      start()
    })
  })
  .catch()
