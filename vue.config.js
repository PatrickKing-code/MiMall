module.exports = {
  publicPath: '/',
  outputDir: process.env.outputDir,
  devServer: {
    port: 8080,
    open: true,
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
