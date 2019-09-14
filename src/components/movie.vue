<template>
  <div>
    <section v-center>

      <br>
      <br>
      <br>
      <br>
      <br>
      <span v-size="'30px'" class="tittle"> {{movie.tittle | catch("Title") | capitalize }} </span>
      <br>
      <br>
      <br>
      <br>
      <br>
      <img class="poster" :src="getImage()" alt="Poster">
      <br>
      <br>
      <br>
      <br>
      <br>
      <span v-size="'20px'" v-color="'#ffffff'"> YEAR : {{movie.year | catch("Year")}}</span>
      <br>
      <br>
      <span v-size="'20px'" v-color="'#ffffff'"> ROTTEN TOMATOES : {{movie.rating | catch("Rating")}}</span>
      <br>
      <br>
      <span v-size="'20px'" v-color="'#ffffff'"> PLOT : {{movie.plot | catch("Plot")}}</span>
      <br>
      <br>
      <br>
      <br>
      <div v-if="path!= ['/' || '/soon']" v-center>
        <button class="button" type="button" name="button" value="Book Ticket">BOOK TICKET</button>
      </div>
      <br>
      <br>
      <br>
      <br>
    </section>
  </div>
</template>

<script>
export default {
  name: 'movie',
  data(){
    return{
      movie:{},
      path:""
    }
  },
  created(){
    this.movie = this.$store.getters.get;
    this.path = this.$store.getters.getPath;
  },
  methods:{
    getImage(){
      return this.movie.poster;
    }
  }
}
</script>

<style scoped>

.tittle{
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

.poster{
  width:33%;
  height:auto;
}

.button{
  margin:20px;
  width:320px;
  height: 80px;
  border-radius: 10px;
  border: 1px solid #ffffff;
  color: #A5FFEE;
  padding:5px;
  font-size: 30px;
  cursor: pointer;
  outline: none;
  background-color: #A5A5A5;
}

.button:hover{
  background-color: rgba(255,255,255,0.4);
  color:#A5FFEE;
}

</style>
