import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/table',
    name: 'TableDemo',
    component: () =>
      import(/* webpackChunkName: "tableDemo"" */ '@/views/TableDemo.vue'),
  },
]

export default routes
