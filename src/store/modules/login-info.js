// import login from '../../api/module/login'
import {getToken, setToken, removeToken, removeSession} from '../../utils/auth'
import validate from '../../utils/validate'
import menuData from "../data/menu";
import permissions from "../data/permissions";

const loginInfo = {
  state: {
    token: getToken(),
    permissions: [],
    info: {},
    menu: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
      setToken(token)
    },
    SET_INFO: (state, info) => {
      state.info = info
    },
    SET_PERMISSIONS: (state, permissions) => {
      state.permissions = permissions
    },
    SET_MENU: (state, menu) => {
      state.menu = menu
    }
  },

  actions: {
    // 登录
    Login({commit}, loginForm) {
      return new Promise((resolve) => {
        let fd = new FormData()
        for (let k in loginForm) {
          fd.append(k, loginForm[k])
        }
        const data = 'Bearer';
        commit('SET_TOKEN', data)
        resolve('/')
        // login.login(fd).then(response => {
        //   const data = response.result && response.result.result ? 'Bearer' + response.result.result.token : '';
        //   commit('SET_TOKEN', data)
        //   resolve('/')
        // }).catch(error => {
        //   reject(error)
        // })
      })
    },

    // 获取用户信息
    GetInfo({commit}) {
      return new Promise(resolve => {
        // login.get_info().then(response => {
          // const data = response.result
          commit('SET_INFO', {})
          commit('SET_PERMISSIONS', [])
          resolve({})
        // }).catch(() => {
          // reject('获取用户信息失败~')
        // })
      })
    },
    // 得到菜单
    get_menu({commit, state}) {
      return new Promise((resolve) => {
        console.log(state.permissions);
        let menu = [];
        menuData.forEach(m => {
          let itemObject = {};
          for (let k in m) {
            if (k !== 'children') {
              itemObject[k] = m[k]
            }
            else {
              itemObject.children = [];
              m.children.forEach(i => {
                if (validate.comparison(state.permissions, i.mate.permission)) {
                  itemObject.children.push(i)
                }
              })
            }
          }
          menu.push(itemObject)
        })
        commit('SET_MENU', menu)
        resolve(menu)
      })
    },
    // 获取用户权限
    get_permissions({commit}) {
      return new Promise(resolve => {
        // 通过接口获取权限
        commit('SET_PERMISSIONS', permissions)
        resolve()
        // if (state.info.roles && state.info.roles.length) {
        //   let data = []
        //   state.info.roles.forEach(i => data.push(i.role_name))
        //   commit('SET_PERMISSIONS', data)
        //   resolve(data)
        // }
        // else {
        //   reject('用户暂未设置角色~')
        // }
      })
    },

    // 登出
    LogOut({commit}) {
      return new Promise((resolve) => {
        commit('SET_TOKEN', '')
        commit('SET_INFO', {})
        commit('SET_PERMISSIONS', [])
        removeSession()
        removeToken()
        resolve('/login')
      })
    },

    // 前端 登出
    FedLogOut({commit}) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_INFO', {})
        commit('SET_PERMISSIONS', [])
        removeSession()
        removeToken()
        resolve()
      })
    }
  }
}

export default loginInfo
