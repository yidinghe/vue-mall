import Vue from 'vue'
import store from './store'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import env from './env'


// 根据前端的跨域方式做调整 /a/b : /api/a/b => /a/b
axios.defaults.baseURL = env.baseURL
axios.defaults.timeout = 8000

// request intercept https://github.com/axios/axios/issues/1383
// 接口错误拦截 https://github.com/axios/axios
axios.interceptors.response.use(function (response) {
  let res = response.data
  if (res.status == 0) {
    return res.data
  } else if (res.status == 10) {
    window.location.href = '/#/login'
  } else {
    alert(res.msg)
  }
})

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
