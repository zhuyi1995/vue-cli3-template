import router from './index'
// import {getToken, removeToken} from '@/utils/auth'
import store from './../store';

// const whiteList = []
router.beforeEach((to, from, next) => {
  next()
  // if (getToken()) {
  //   if (to.path === '/login') {
  //     store.dispatch('FedLogOut').then(() => {
  //       next()
  //     }).catch(() => {
  //       removeToken()
  //       next()
  //     })
  //   }
  //   else {
  //     next()
  //   }
  // }
  // else {
  //   if (whiteList.indexOf(to.path) !== -1) {
  //     next()
  //   }
  //   else {
  //     removeToken()
  //     next('/login')
  //   }
  // }
    if (to.meta.keepAlive && to.name) {
        store.commit('SET_INCLUDE', to.name)
    } else {
        store.commit('SET_EXCLUDE', to.name)
    }
})

router.afterEach(() => {
})
