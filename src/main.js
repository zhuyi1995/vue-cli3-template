// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import * as filters from './filters'
import * as directives from './directive'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import api from './api/index'
import validate from './utils/validate'
// 全局注册
import './components/index.js';

import './styles/index.scss'
import './router/permission'
import './plugins/element.js'
import './plugins/rem.js'
import './icons'

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Object.keys(directives.default).forEach(key => {
  Vue.directive(key, directives.default[key])
})

Vue.config.productionTip = false
Vue.prototype.api = api
Vue.prototype.validate = validate

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<app/>',
  components: {App}
})
