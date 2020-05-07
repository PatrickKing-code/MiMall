import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import service from './utils/request'
import './plugins/element.js'
import './style/reset.scss'
import './style/config.scss'

Vue.config.productionTip = false
Vue.prototype.service = service

// 根据环境配置baseURL
let baseURL
if (process.env.VUE_APP_MODE == 'development') {
  baseURL = process.env.VUE_APP_API_URL
  console.log(baseURL);
} else if (process.env.VUE_APP_MODE == 'test') {
  baseURL = process.env.VUE_APP_API_URL
  console.log(baseURL);
} else if (process.env.VUE_APP_MODE == 'production') {
  baseURL = process.env.VUE_APP_API_URL
  console.log(baseURL);
} else {
  console.log('并为找到与之对应的mode值');
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
