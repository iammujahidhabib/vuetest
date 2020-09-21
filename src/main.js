import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { createNamespacedHelpers } from 'vuex'
/* eslint-disable */
const { mapState, mapActions } = createNamespacedHelpers('users')
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
