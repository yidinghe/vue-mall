import Vue from 'vue'
import store from './store'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import App from './App.vue'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import env from './env'


// 根据前端的跨域方式做调整 /a/b : /api/a/b => /a/b
// axios.defaults.baseURL = env.baseURL
// axios.defaults.timeout = 8000

axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000; 

// request intercept https://github.com/axios/axios/issues/1383
// 接口错误拦截 https://github.com/axios/axios
axios.interceptors.response.use(function (response) {
  let res = response.data
  if (res.status == 0) {
    return res.data
  } else if (res.status == 10) {
    let path = location.hash;
    if (path != '#/index') {
      window.location.href = '/#/login'
    }
    return Promise.reject(res)
  } else {
    Message.warning(res.msg)
    return Promise.reject(res)
  }
})

Vue.use(VueAxios, axios)
Vue.use(VueCookie)
Vue.use(VueLazyload, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
