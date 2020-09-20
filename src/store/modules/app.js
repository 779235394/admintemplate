const app = {
  namespaced: true,
  state: {
    sidebar: {
      opened: false,
    },
  },
  mutations: {
    TOGGLE_SIDEBAR: (state) => {
      state.sidebar.opened = !state.sidebar.opened;
      // if (state.sidebar.opened) {
      //   Cookies.set('sidebarStatus', 1)
      // } else {
      //   Cookies.set('sidebarStatus', 0)
      // }
    },
  },
  actions: {
    toggleSideBar({ commit }) {
      commit("TOGGLE_SIDEBAR");
    },
  },
  getters: {},
};

export default app;
