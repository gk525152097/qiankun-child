const system = {
  namespaced: true,

  state: {
    menuTree: [] // 菜单信息
  },

  mutations: {
    SET_MENU_TREE: (state, data) => {
      state.menuTree = data
    }
  },
  actions: {
    // /**
    //  * 用户登录
    //  * @param commit
    //  * @param data
    //  * @returns {Promise<any>}
    //  */
    // login ({ commit }, data) {
    //   return new Promise((resolve, reject) => {
    //     login(data).then(res => {
    //       commit('SET_USER', res.data)
    //       resolve(res.data)
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // }
  }
}

export default system
