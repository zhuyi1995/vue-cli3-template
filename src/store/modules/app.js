import {getSession, setSession} from "../../utils/auth";

const app = {

  state: {
    side: getSession('side') ? getSession('side') : '',
    collapse: getSession('collapse') ? getSession('collapse') : '0',
    open: getSession('open') ? getSession('open') : [],
    active: getSession('active') ? getSession('active') : '',
  },

  mutations: {
    SET_SIDE: (state, index) => {
      state.side = index
      setSession('side', index)
    },
    SET_COLLAPSE: (state, collapse) => {
      state.collapse = collapse
      setSession('collapse', collapse)
    },
    SET_OPEN: (state, index) => {
      state.open = index
      setSession('open', index)
    },
    SET_ACTIVE: (state, index) => {
      state.active = index
      setSession('active', index)
    }
  },

  actions: {
    // 点击菜单
    set_side({commit}, params) {
      return new Promise((resolve) => {
        commit('SET_SIDE', params.val)
        commit('UPDATE', (new Date()).toString())
        resolve(params.index)
      })
    },
    // 折叠菜单
    set_collapse({commit}, collapse) {
      return new Promise((resolve) => {
        commit('SET_COLLAPSE', collapse)
        resolve()
      })
    },
    // 选择菜单
    set_active({commit}, params) {
      return new Promise((resolve) => {
        commit('SET_ACTIVE', params)
        resolve(params)
      })
    },
    // 打开菜单
    set_open({commit}, collapse) {
      return new Promise((resolve) => {
        commit('SET_OPEN', collapse)
        resolve()
      })
    }
  }
}

export default app
