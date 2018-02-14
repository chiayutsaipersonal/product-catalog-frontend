import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  modules: {},
  actions: {},
  mutations: {},
  getters: {},
  state: {},
})

export default store

if (module.hot) {
  module.hot.accept([
    // './actions',
    // './getters',
    // './mutations',
  ], () => {
    // let newActions = require('./actions').default
    // let newGetters = require('./getters').default
    // let newMutations = require('./mutations').default
    store.hotUpdate({
      modules: {},
      // actions: newActions,
      // getters: newGetters,
      // mutations: newMutations,
    })
  })
}
