<template>
  <div>
    <section id="home-display">
      <h1 class="overlay">MOST WATCHED MOVIES</h1>
      <br>
      <br>
      <div class="center-div">
        <div class="center-div-inline">
          <movieCard v-for="(movie,index) in movies" :key="movie.path" :movie="movie" v-if = "index < 9"></movieCard>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import movieCard from './movieCard.vue';

  export default{
  components: {
    movieCard
  },
  name: 'soon',
  data(){
    return{
      words:["joker","jaws","race","mission","hack"],
      movies:{}
    }
  },
  created(){
    this.displayMovies();
  },
  methods:{
    displayMovies(){
      axios.get(" https://movie-database-imdb-alternative.p.rapidapi.com/?s="+ this.getString(),
      {headers:{"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
        "x-rapidapi-key": "15c0216cc7msh50655ec99b3a1a4p1f3216jsndbd872e5ef15"}})
        .then((response)=>{
          this.$store.commit('setPath',this.$route.path);
          this.movies = response.data.Search;
        });
    },
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

.poster{
  margin:20px 50px 50px 50px;
  height:auto;
  width:31%;
}

.hide2{
  display:none;
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

.poster1{
  color:#ffffff;
  text-align:center;
  margin:0 180px 0 180px;
}

@media only screen and (min-width:1700px) {

  .poster{
    margin:0 15px 15px 15px;
    height:auto;
    width:31%;
  }

  .hide{
    display:none;
  }
}

@media only screen and (max-width:1326px) {

  #home-display{
    margin: 50px auto auto auto;
    width:80%;
    min-height:500px;
    text-align: center;
  }

  .poster{
    text-align: center;
    margin:50px;
    height:auto;
    width:30%;
    display: inline-block;
  }

  .overlay{
    color:#ffffff;
    font-size:30px;
    text-align: center;
    -webkit-animation: overlay 1s ease-in-out infinite alternate;
    -moz-animation: overlay 1s ease-in-out infinite alternate;
    animation: overlay 1s ease-in-out infinite alternate;
  }

  .poster1{
    color:#ffffff;
    text-align:center;
    font-size:20px;
    margin:0 150px 0 150px;
  }
}

@media only screen and (max-width:1119px) {

  #home-display{
    margin: 100px auto auto auto;
    width:80%;
    min-height:500px;
    text-align: center;
  }

  .poster1{
    color:#ffffff;
    text-align:center;
    font-size:20px;
    margin:0 100px 0 100px;
  }
}

</style>
