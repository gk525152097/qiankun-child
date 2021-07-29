import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
import system from './modules/system'
import global from './modules/global'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    system,
    global
  },
  getters
})

export default store
