Vue.component("reservations",{
`
<template>
  <div>
    <section id="reservation-display">
    <h1 class="overlay" v-once>RESERVATIONS</h1>
    <br>
    <br>
    <div class="center-div">
      <div class="center-div-inline">
      <reservationCard v-for="(movie,index) in movies" :key="movie.path" :movie="movie"></reservationCard>
      </div>
    </div>
    </section>
  </div>
</template>
`
<script>

import reservationCard from "./reservationCard"

export default {
  name: 'reservations',
  components:{
    reservationCard
  },
  data(){
    return{
      movies:{}
    }
  },
  created(){
    this.displayReservations()
  },
  methods:{
    displayReservations(){
      this.movies = User.getReservation();
      console.log(this.movies);
      this.$store.commit('setPath',this.$route.path);
    }
  }
}
</script>

<style scoped>

#reservation-display{
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

  #reservation-display{
    margin: 50px auto auto auto;
    width:80%;
    min-height:500px;
    text-align: center;
  }

}

@media only screen and (max-width:1119px) {

  #reservation-display{
    margin: 100px auto auto auto;
    width:80%;
    min-height:500px;
    text-align: center;
  }

}

</style>
