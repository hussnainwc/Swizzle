Vue.component("home",{
`
<template>
  <div>
    <section id="home-display">
      <!-- V-once used for handling completely static content (handling edged cases) -->
      <h1 class="overlay" v-once>MOST WATCHED MOVIES</h1>
      <br>
      <br>
      <div class="center-div">
        <div class="center-div-inline">
          <movies :movies="movies" :index="index"></movies> <!-- Passing props -->
        </div>
      </div>
    </section>
  </div>
</template>
`
<script>
  import movies from './movies';

  export default{
  components: {
    movies: () => import("./movies") // Async component loading
  },
  name: 'home',
  data(){
    return{
      words:["joker","jaws","race","mission","hack"], // Words array
      movies:{},
      index:9 // Number of movies to be displayed
    }
  },
  created(){
    this.displayMovies(); // Displays movies on created
  },
  methods:{
    /**
      * Queries end point with a random word from words array and assigns response to movies object
      * Commits current path to store
      * @param {}
      * @return {null}
      */
    displayMovies(){
      axios.get(" https://movie-database-imdb-alternative.p.rapidapi.com/?s="+ this.getString(),
      {headers:{"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
        "x-rapidapi-key": "15c0216cc7msh50655ec99b3a1a4p1f3216jsndbd872e5ef15"}})
        .then((response)=>{
          this.$store.commit('setPath',this.$route.path);
          this.movies = response.data.Search;
        });
    },
    /**
      * Returns a random word from the words array
      * @param {}
      * @return {word}
      */
    getString(){
      return this.words[Math.floor(Math.random() * (+4 - +0)) + +0];
    }
  }
}
</script>

<style scoped>

#home-display{
  margin: 50px auto auto auto;
  width:80%;
  min-height:500px;
  text-align: center;
}

.overlay{
  margin-bottom:50px;
  color:#ffffff;
  font-size:30px;
  text-align: center;
  -webkit-animation: overlay 1s ease-in-out infinite alternate;
  -moz-animation: overlay 1s ease-in-out infinite alternate;
  animation: overlay 1s ease-in-out infinite alternate;
}

@-webkit-keyframes overlay{
  from {
    text-shadow: 0 0 10px #000000, 0 0 20px #000000, 0 0 30px #D3D3D3,0 0 40px #D3D3D3;
  }

  to {
    text-shadow: 0 0 20px #000000, 0 0 30px #ffffff, 0 0 40px #ffffff, 0 0 50px #ffffff;
  }
}

@media only screen and (max-width:1326px) {

  #home-display{
    margin: 50px auto auto auto;
    width:80%;
    min-height:500px;
    text-align: center;
  }

}

@media only screen and (max-width:1119px) {

  #home-display{
    margin: 100px auto auto auto;
    width:80%;
    min-height:500px;
    text-align: center;
  }

}

</style>
