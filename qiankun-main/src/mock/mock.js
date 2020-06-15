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
