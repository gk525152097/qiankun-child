const global = {
  namespaced: true,

  state: {
    globalData: {}
  },

  mutations: {
    HANDLE_DATA: (state, data) => {
      state.globalData = data
    }
  },
  actions: {
    handleData ({ state, commit }, data) {
      const newData = {
        ...state.globalData,
        ...data
      }
      commit('HANDLE_DATA', newData)
    }
  }
}

export default global
