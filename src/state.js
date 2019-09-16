require('./bootstrap.js')

const store = new Vuex.Store({
  state: {
    movie:{
      Title:"",
      Poster:"",
      Year:"",
      Rating:"",
      Plot:"",
      imdbID:""
    },
    path:"",
    card:{
      brand:"",
      cvc:"",
      expiration:"",
      number:"",
      postalCode:""
    },
    reservations:[]
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
    },

    /**
      * Sets the card to be used
      * @param {state,card}
      * @return {null}
      */
    setCard(state,card){
      state.card.brand = card.brand,
      state.card.cvc = card.cvc,
      state.card.expiration = card.expiration,
      state.card.number = card.number,
      state.card.postalCode = card.postalCode
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
    },

    /**
      * Returns the user's saved card
      * @param {state}
      * @return {card}
      */
    getCard(state){
      return state.card;
    }
  }
})

export default store;
