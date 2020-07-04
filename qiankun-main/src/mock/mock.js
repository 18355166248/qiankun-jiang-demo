const appConfig = [
  {
    id: '1',
    title: 'vue子组件',
    icon: 'el-icon-monitor',
    module: 'vue',
    isDefault: true,
    devEntry: '//localhost:10002',
    depEntry: 'http://ui.mfe.wlui.com.cn/',
    routerBase: '/vue',
    container: '#childApp',
    children: [
      {
        id: '1-1',
        title: '表格',
        routerBase: '/vue/table',
        icon: 'el-icon-document-copy',
      },
      {
        id: '1-2',
        title: '表单',
        routerBase: '/vue/form',
        icon: 'el-icon-files',
      },
    ],
  },
  // {
  //   id: '1-1',
  //   title: '卡券包',
  //   icon: 'el-icon-takeaway-box',
  //   module: 'box-vue',
  //   isDefault: true,
  //   // devEntry: 'http://uat.scrm.laoganma.fun/scrm_vue',
  //   devEntry: 'http://ui.mfe.wlui.com.cn/',
  //   depEntry: 'http://ui.mfe.wlui.com.cn/',
  //   routerBase: '/blog',
  //   container: '#childApp',
  //   children: [
  //     {
  //       id: '1-1',
  //       title: '优惠券管理',
  //       routerBase: '/blog',
  //       icon: 'el-icon-document-checked',
  //     },
  //     {
  //       id: '1-2',
  //       title: '优惠券核销记录',
  //       routerBase: '/blog/about',
  //       icon: 'el-icon-coordinate',
  //     },
  //   ],
  // },
  {
    id: '2',
    title: 'React子组件',
    icon: 'el-icon-monitor',
    module: 'react',
    devEntry: '//localhost:10003',
    depEntry: 'http://ui.mfe.wlui.com.cn/',
    routerBase: '/react',
    container: '#childApp',
    children: [
      {
        id: '1-1',
        title: 'Home',
        routerBase: '/react',
        icon: 'el-icon-document-copy',
      },
      {
        id: '1-2',
        title: 'About',
        routerBase: '/react/about',
        icon: 'el-icon-document-copy',
      },
    ],
  },
  // {
  //   id: '3',
  //   title: 'His',
  //   icon: 'el-icon-monitor',
  //   module: 'react-his',
  //   devEntry: 'http://10.101.11.64:7001/',
  //   // devEntry: '/his',
  //   routerBase: '/workbench',
  //   container: '#childApp',
  //   children: [
  //     {
  //       id: '1-1',
  //       title: '预约视图',
  //       routerBase: '/workbench/appointment/appointment-view',
  //       icon: 'el-icon-document-copy',
  //     },
  //   ],
  //   baseParams: {
  //     TOKEN: '2',
  //     REFRESH_TOKEN: '1',
  //     USER_ID: 1619,
  //     MEDICAL_INSTITUTION_ID: 798,
  //     tenantId: 481,
  //     topParentId: 797,
  //     institutionChainType: 2,
  //   },
  // },
]

export default [
  {
    url: '/api/getAppConfigs',
    type: 'post',
    response: () => {
      return {
        code: 200,
        data: appConfig,
      }
    },
  },
]
