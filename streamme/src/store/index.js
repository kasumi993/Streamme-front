import { createStore } from 'vuex'

export default createStore({
  state: {
    lastSeen: [],
  },
  getters: {
  },
  mutations: {
    storeLastSeen(state, movie) {
      state.lastSeen.push(movie);
    },
  },
  actions: {
  },
  modules: {
  }
})
