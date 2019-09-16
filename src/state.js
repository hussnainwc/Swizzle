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
    /**
    * Stores the movie selected in state
    * @param {state,movie}
    * @return {null}
    */
    set(state,movie){
      state.movie.tittle = movie.Title,
      state.movie.poster = movie.Poster,
      state.movie.year = movie.Year,
      state.movie.rating = movie.Ratings[1].Value,
      state.movie.plot = movie.Plot
    },

    /**
    * Stores the path the movie was selected from such as from Now Showing, Coming Soon and Home
    * @param {state,path}
    * @return {null}
    */
    setPath(state,Path){
      state.path = Path;
    }
  },
  getters: {

    /**
    * Returns the movie object
    * @param {state}
    * @return {movie}
    */
    get(state) {
      return state.movie;
    },

    /**
    * Returns the path literal
    * @param {state}
    * @return {path}
    */
    getPath(state){
      return state.path;
    }
  }
})

export default store;
