module.exports = {
  publicPath: "/",
  outputDir: process.env.outputDir,
  devServer: {
    host: "localhost",
    port: 8080,
    proxy: {
      "/api": {
        target: "https://www.imooc.com",
        // 是否将主机头设置成目标地址
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
