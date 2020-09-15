import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import './assets/style.css'

Vue.component('navbar',require('./components/Navbar').default)
import vuejquery from 'vue-jquery'

Vue.use(vuejquery)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
