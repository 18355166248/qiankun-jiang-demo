const path = require('path')
const getRepoInfo = require('git-repo-info')

process.env.VUE_APP_REPO_INFO = JSON.stringify(getRepoInfo())

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        assets: path.resolve(__dirname, 'src/assets'),
      },
    },
  },
  devServer: {
    port: 8090,
    open: true,
    disableHostCheck: true,
    proxy: {
      '/his': {
        target: 'http://dev.cloud.dental.his.laoganma.fun/',
        changeOrigin: true,
        pathRewrite: {
          '^/his': '/',
        },
      },
      '/scrm_vue': {
        target: 'http://uat.scrm.laoganma.fun/',
        changeOrigin: true,
      },
      '/scrm': {
        target: 'http://uat.scrm.laoganma.fun/scrm_vue/',
        changeOrigin: true,
        pathRewrite: {
          '^/scrm': '/',
        },
      },
    },
  },
}
