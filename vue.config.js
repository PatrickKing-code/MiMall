module.exports = {
  devServer: {
    port: 8080,
    open: true,
    hotOnly: true,
    proxy: {
      "/api": {
        target: "https://www.imooc.com",
        changeOrigin: true,
        pathRewrite: {
          "/api": "",
        },
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "./src/style/config.scss";`,
      },
    },
  },
};
