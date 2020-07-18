const getters = {
  token: state => state.loginInfo.token,
  info: state => state.loginInfo.info,
  permissions: state => state.loginInfo.permissions,
  collapse: state => state.app.collapse,
  menu: state => state.loginInfo.menu,
  side: state => state.app.side,
  open: state => state.app.open,
  active: state => state.app.active,

  keepAliveInclude: state => state.system.keepAliveInclude,
  keepALiveExclude: state => state.system.keepALiveExclude,
}
export default getters
