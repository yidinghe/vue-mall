module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://mall-pre.springboot.cn',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  },
  configureWebpack: {
    devtool: 'source-map'
  },
  chainWebpack:(config) => {
    config.plugins.delete('prefetch');
  }
}