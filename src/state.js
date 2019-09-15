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
      state.movie.tittle = Movie.Title,
      state.movie.poster = Movie.Poster,
      state.movie.year = Movie.Year,
      state.movie.rating = Movie.Ratings[1].Value,
      state.movie.plot = Movie.Plot
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
