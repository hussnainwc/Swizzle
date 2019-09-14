require('./bootstrap.js')

const store = new Vuex.Store({
  state: {
    movie:{
      tittle:"",
      poster:"",
      year:"",
      rating:"",
      plot:""
    },
    path:""
  },
  plugins: [createPersistedState()],
  mutations: {
    set(state,movie){
      state.movie.tittle = movie.Title,
      state.movie.poster = movie.Poster,
      state.movie.year = movie.Year,
      state.movie.rating = movie.Ratings[1].Value,
      state.movie.plot = movie.Plot
    },
    setPath(state,Path){
      state.path = Path;
    }
  },
  getters: {
    get(state) {
      return state.movie;
    },
    getPath(state){
      return state.path;
    }
  }
})

export default store;
