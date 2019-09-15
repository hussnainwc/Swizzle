Vue.component("movie",{
`
<template>
  <div>
    <section v-center>

      <br>
      <br>
      <br>
      <br>
      <br>
      <span v-size="'30px'" class="tittle"> {{ movie.tittle | catch("Title") | capitalize }} </span>
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
      <span v-size="'20px'" v-color="'#ffffff'"> YEAR : {{ year | catch("Year")}}</span>
      <br>
      <br>
      <span v-size="'20px'" v-color="'#ffffff'"> ROTTEN TOMATOES : {{ rating | percent |catch("Rating")}}</span>
      <br>
      <br>
      <span v-size="'20px'" v-color="'#ffffff'"> PLOT : {{ movie.plot | catch("Plot")}}</span>
      <br>
      <br>
      <br>
      <br>
      <div v-if="path == '/now'" v-center>
        <button @click="buy()" class="button" type="button" name="button" value="Book Ticket">BOOK TICKET</button>
      </div>
      <div v-else-if="path == '/soon'" v-center>
        <button @click="buy()" class="button" type="button" name="button" value="">BOOK AHEAD</button>
      </div>
      <div v-else v-center>
        <button @click="sold()" :class="{ 'red': path == '/' }" class="button" type="button" name="button" value="">SOLD</button>
      </div>
      <br>
      <br>
      <br>
      <br>
    </section>
  </div>
</template>
`
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
  computed:{
    year(){
      if(this.path == '/now'){
        return new Date().getFullYear();
      }
      else if(this.path == '/soon'){
        return (new Date().getFullYear() + Math.floor(Math.random() * (+2 - +0)) + +0);
      }
      return this.movie.year
    },
    rating(){
      if(this.movie.rating == "0%"){
        return Math.floor(Math.random() * (+99 - +0)) + +0;
      }
      return this.movie.rating
    }
  },
  methods:{
    getImage(){
      return this.movie.poster;
    },
    buy(){
      Swal.fire({
        title: 'WOULD YOU LIKE TO BUY A TICKET?',
        text: 'EACH TICKET COST $10',
        type: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'BUY',
        cancelButtonText: 'NO'
      })
        .then((result) => {
              if (result.value) {
                this.enterTickets();
              }})
    },
    enterTickets(){
      Swal.fire({
        title: 'HOW MANY TICKETS WOULD YOU LIKE TO BUY!',
        input: 'text',
        confirmButtonText: 'Lovely!',
        inputValidator: (value) => {
          if (!value || value == 0) {
            return 'ENTER A VALID NUMBER!'
          }
        }
      }).then((result) =>{
        if(result.value){
          if(this.$store.getters.getCard != undefined){
            this.chargeCard(result.value);
          }
          else{
            Toast.fire({type: 'info',title: 'Please add a valid card '})
          }
        }
      })
    },
    chargeCard(amount){
      Swal.fire({
        title: amount * 10 + ' DOLLARS WILL BE CHARGED' ,
        text: " to your card : "+User.maskCard(this.$store.getters.getCard.number),
        type: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'BUY',
        cancelButtonText: 'NO'
      })
        .then((result) => {
              if (result.value) {

              }})
    },
    sold(){
      Toast.fire({type: 'info',title: 'SOLD OUT'})
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

.red{
  background-color:red !important;
}

</style>
