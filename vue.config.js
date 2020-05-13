module.exports = {
  publicPath: '/',
  outputDir: process.env.outputDir,
  devServer: {
    port: 8080,
    open: true,
    proxy: {
      "/api": {
        target: "https://mall-pre.springboot.cn",
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
