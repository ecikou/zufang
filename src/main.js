import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
// import 'vant/lib/index.css'
import 'vant/lib/index.less'
import NavBar from '@/views/NavBar/index.vue'
Vue.use(Vant)
Vue.prototype.$hop = 'http://liufusong.top:8080'
Vue.config.productionTip = false
Vue.component(NavBar.name, NavBar)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
