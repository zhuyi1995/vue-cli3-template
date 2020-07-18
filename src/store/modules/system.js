const system = {
  state: {
      keepAliveInclude: [],
      keepALiveExclude: []
  },
  mutations: {
      SET_INCLUDE: (state, data) => {
          const index = state.keepAliveInclude.indexOf(data)
          if (index === -1) {
            state.keepAliveInclude.push(data)
          }
      },
      SET_EXCLUDE: (state, data) => {
          const index = state.keepALiveExclude.indexOf(data)
          if (index === -1) {
            state.keepALiveExclude.push(data)
          }
      }
  },
  actions: {
  }
}

export default system
