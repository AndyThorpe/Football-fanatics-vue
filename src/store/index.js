import { createStore } from "vuex";

export default createStore({
    state () {
      return {
        data: [],
        view: 'fixtures',
        date: '',
        matchId: null,
        matchView: 'events',
        loading: true
      }
    },
    getters: {
        getView: (state) => {
            return state.view
        },
        getDate: (state) => {
          return state.date
      },
        getMatchId: (state) => {
            return state.matchId
        },
        getMatchView: (state) => {
            return state.matchView
        },
        loading: (state) => {
          return state.loading
      }
    },
    mutations: {
        changeView (state, view) {
          state.view = view
        },
        changeDate (state, date) {
          state.date = date
        },
        changeMatchID (state, id) {
          state.matchId = id
        },
        changeMatchView (state, view) {
          state.matchView = view
        },
        setLoading: (state, bool) => {
          state.loading = bool
      }
      }
    
  });