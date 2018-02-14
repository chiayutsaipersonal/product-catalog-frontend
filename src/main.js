import Vue from 'vue'
import VueMq from 'vue-mq'
import Vuex from 'vuex'

import router from './router'
import store from './store'

import App from '@/components/App'

// https://alligator.io/vuejs/vue-media-queries
Vue.use(VueMq, {
  breakpoints: {
    xs: 480,
    sm: 768,
    md: 1024,
    lg: Infinity,
  },
})
Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
