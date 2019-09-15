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
    set(state,Movie){
        state.movie.Title = Movie.Title,
        state.movie.Poster = Movie.Poster,
        state.movie.Year = Movie.Year,
        state.movie.Rating = Movie.Ratings[1].Value,
        state.movie.Plot = Movie.Plot,
        state.movie.imdbID = Movie.imdbID
    },
    setPath(state,Path){
      state.path = Path;
    },
    setCard(state,card){
      state.card.brand = card.brand,
      state.card.cvc = card.cvc,
      state.card.expiration = card.expiration,
      state.card.number = card.number,
      state.card.postalCode = card.postalCode
    }
  },
  getters: {
    get(state) {
      return state.movie;
    },
    getPath(state){
      return state.path;
    },
    getCard(state){
      return state.card;
    }
  }
})

export default store;
