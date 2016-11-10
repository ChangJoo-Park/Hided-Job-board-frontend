import Vue from 'vue'
import Vuex from 'vuex'
import positions from './modules/positions'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    positions
  }
})

export default store
