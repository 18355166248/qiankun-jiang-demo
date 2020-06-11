const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        assets: path.resolve(__dirname, "src/assets"),
      },
    },
  },
  devServer: {
    port: 8090,
    open: true,
    disableHostCheck: true,
  },
};
