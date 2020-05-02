module.exports = {
    publicPath: '/',
    devServer: {
        open: true,
        port: 8080,
        hotOnly: true,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1',
                changeOrigin: true,
                pathRewrite: {
                    '^api': ""
                }
            }
        }
    }
}