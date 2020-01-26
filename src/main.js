import Vue from 'vue'
import VueMq from 'vue-mq'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueMq, {
  breakpoints: {
    small: 450,
    medium: 1250,
    large: Infinity
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
