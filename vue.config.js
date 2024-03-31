const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/from_pages/' : '/',
  transpileDependencies: true
})
