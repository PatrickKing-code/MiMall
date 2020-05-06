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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
