import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import VeeValidate from 'vee-validate'
import VueResource from 'vue-resource'

Vue.use(VeeValidate)
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  store,
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
