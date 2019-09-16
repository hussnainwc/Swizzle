Vue.component("reservationCard",{
`
<template>
  <div @click="Movie()" class="clickable container center-div-inline">
    <span class="tittle">{{this.Title}}</span>
    <br>
    <br>
    <img class="poster" :src="getImage()" alt="Poster">
  </div>
</template>
`
<script>

export default {
  name: 'reservationCard',
  props:['movie'], // Prop from the parent
  data(){
    return{
      Title:this.movie.movie.Title,
      movieDetials:{}
    }
  },
  methods:{
    /**
      * Queries end point with imdbID from the prop and assigns response to movieDetails object
      * Commits movieDetails to the store
      * @param {}
      * @return {null}
      */
    Movie(){
      axios.get("http://www.omdbapi.com/?i="+ this.movie.movie.imdbID +"&apikey=a921d199")
       .then((response)=>{
         this.movieDetials =  response.data
         this.$store.commit('set',this.movieDetials);
         this.$root.$data.tickets = this.movie.tickets;
       });
      this.$router.push({name:'movie'});
    },
    /**
      * Returns the poster of the movie
      * @param {}
      * @return {poster}
      */
    getImage(){
      return this.movie.movie.Poster;
    }
  }
}
</script>

<style scoped>

.container{
  margin:50px 15px 50px 15px;
  height:500px;
  width:100%;
  float:left;
}

.poster{
  width:100%;
  height:500px;
}

.tittle {
  color: white;
  font-size: 20px;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

@media only screen and (min-width:1700px) {

  .container{
    margin:50px 15px 50px 15px;
    height:700px;
    width:31%;
  }

  .poster{
    width:100%;
    height:700px;
  }

}

@media only screen and (max-width:1326px) {

  .container{
    text-align: center;
    margin:50px 15px 50px 15px;
    height:400px;
    width:28%;
  }

  .poster{
    width:100%;
    height:400px;
  }

}

@media only screen and (max-width:706px) {

  .container{
    text-align: center;
    margin:30px 15px 30px 15px;
    height:250px;
    width:22%;
  }

  .poster{
    width:100%;
    height:250px;
  }

  .tittle {
    color: white;
    font-size: 10px;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }

}

@media only screen and (max-width:375px) {

  .container{
    text-align: center;
    margin:0px 15px 70px 15px;
    height:150px;
    width:22%;
  }

  .poster{
    width:100%;
    height:150px;
  }

  .tittle {
    color: white;
    font-size: 10px;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }

}

@media only screen and (max-width:375px) {

  .container{
    text-align: center;
    margin:0px 35px 70px 35px;
    height:150px;
    width:22%;
  }

  .poster{
    width:100%;
    height:150px;
  }

  .tittle {
    color: white;
    font-size: 10px;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }

}

</style>
