const app = {
  namespaced: true,
  state: {
    sidebarOpen: JSON.parse(localStorage.getItem("sidebarOpen")),
  },
  mutations: {
    TOGGLE_SIDEBAR: (state, payload) => {
      state.sidebarOpen = payload;
    },
  },
  actions: {
    toggleSideBar({ commit }, payload) {
      commit("TOGGLE_SIDEBAR", payload);
      localStorage.setItem("sidebarOpen", JSON.stringify(payload));
    },
  },
  getters: {
    App_ToggleSideBar(state) {
      return (
        state.sidebarOpen || JSON.parse(localStorage.getItem("sidebarOpen"))
      );
    },
  },
};

export default app;
