import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import loginInfo from './modules/login-info'
import system from './modules/system'
import getters from './getters'


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    loginInfo,
    system
  },
  getters
})

export default store
