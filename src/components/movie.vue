
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
      <span v-size="'30px'" class="tittle"> {{ movie.Title | catch("Title") | capitalize }} </span>
      <br>
      <br>
      <br>
      <br>
      <span v-if=" this.path != '/soon' " v-size="'30px'" v-color="'white'"> TICKETS SOLD : {{ attendance }} </span>
      <br v-else>
      <br>
      <br>
      <br>
      <br>
      <img class="poster" :src="getImage()" alt="Poster">
      <br>
      <br>
      <br>
      <br>
      <span v-if="this.path == '/reservations'" v-size="'20px'" v-color="'#ffffff'"> TICKETS : {{ numberOfTickets | catch("Tickets")}}</span>
      <br v-else>
      <br>
      <br>
      <span v-size="'20px'" v-color="'#ffffff'"> YEAR : {{ year | catch("Year")}}</span>
      <br>
      <br>
      <span v-size="'20px'" v-color="'#ffffff'"> ROTTEN TOMATOES : {{ rating | percent |catch("Rating")}}</span>
      <br>
      <br>
      <span v-size="'20px'" v-color="'#ffffff'"> PLOT : {{ movie.Plot | catch("Plot")}}</span>
      <br>
      <br>
      <br>
      <br>
      <div v-if="this.path == '/now'  || this.path == '/navigation'" v-center>
        <button @click="buy()" class="button" type="button" name="button" value="Book Ticket">BOOK TICKET</button>
      </div>
      <div v-else-if="this.path == '/soon'" v-center>
        <button @click="buy()" class="button" type="button" name="button" value="">BOOK AHEAD</button>
      </div>
      <div v-else-if="this.path == '/'" v-center>
        <button @click="soldOut()" :class="{ 'red': this.path == '/' }" class="button" type="button" name="button" value="">SOLD</button>
      </div>
      <div v-else v-center>
        <button @click="deleteReservation()" :class="{ 'red': this.path == '/reservations' }" class="button" type="button" name="button" value="">DELETE</button>
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
    path:"",
    numberOfTickets:"",
    currentSold: 0,
    Sold: 0,
    isRunning: false,
    interval: null
  }
},
created(){
  this.movie = this.$store.getters.get; // Gets movies from the store and assigns it to local object
  this.path = this.$store.getters.getPath; // Gets path from the store and assigns it to local object
  // Gets number of tickets user has bought for this movie from the store and assigns it to local object
  this.numberOfTickets = this.$root.$data.tickets; // Handling edge case
  var randInt = this.random();
  this.Sold = randInt;
  this.sold();
},
beforeDestory(){
  // Handling edge case , clears data in root component so it can be updated for the next movie loaded into this component
  this.$root.$data.tickets = "";
},
computed:{
  /**
    * If movie is Now Showing return current year
    * If movie is Coming Soon return one or two years ahead
    * If any other path return current year
    * @param {}
    * @return {year}
    */
  year(){
    if(this.path == '/now'){
      return new Date().getFullYear();
    }
    else if(this.path == '/soon'){
      return (new Date().getFullYear() + Math.floor(Math.random() * (+2 - +0)) + +0);
    }
    return this.movie.Year
  },
  /**
    * If rating is 0% return random rating
    * @param {}
    * @return {rating}
    */
  rating(){
    if(this.movie.Rating == "0%"){
      return Math.floor(Math.random() * (+99 - +0)) + +0;
    }
    return this.movie.Rating;
  },
  /**
    * Retunrns number of tickets sold
    * @param {}
    * @return {currentTicketsSold}
    */
  attendance(){
    return this.currentSold.toFixed(0);
  }
},
watch: {
  Sold(newValue){
  TweenLite.to(this.$data, 5, { currentSold : newValue }); // Animates updated tickets sold using tween
  }
},
methods:{
  /**
    * Initializes a random number for number of tickets sold between 0 and 5000
    * @param {}
    * @return {number}
    */
    random(){
      return Math.floor(Math.random() * (+5000 - +0)) + +0
    },
    /**
      * Refreshes the ticket count between 3 to 5 seconds
      * @param {}
      * @return {null}
      */
    sold() {
      if (this.isRunning) {
        clearInterval(this.interval);
      } else {
        this.interval = setInterval(this.sell, Math.floor(Math.random() * (+5000 - +3000)) + +3000);
      }
      this.isRunning = !this.isRunning
    },
    /**
      * Increments the number of tickets sold between 0 and 5
      * @param {}
      * @return {null}
      */
    sell() {
      this.Sold = parseInt(this.Sold) + Math.floor(Math.random() * (+5 - +0)) + +0;
    },
    /**
      * Returns the poster of the movie
      * @param {}
      * @return {poster}
      */
  getImage(){
    return this.movie.Poster;
  },
  /**
    * Checks if the user is logged inspect
    * If user is logged in asks if the user wants to buy a tickets
    * Else asks the user to login
    * @param {}
    * @return {null}
    */
  buy(){
    if(User.loggedIn()){
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
    }
    else{
      Swal.fire({
        title: 'LOGIN TO CONTINUE',
        type: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'YES',
        cancelButtonText: 'NO'
      })
      .then((result) => {
        if (result.value) {
          this.$router.push({name:'auth'});
        }})
    }
  },
  /**
    * Asks users to enter number of tickets they want to buy and validates input
    * Checks if the user has a valid card added
    * @param {}
    * @return {null}
    */
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
        if(this.$store.getters.getCard.number != ""){
          this.chargeCard(result.value);
        }
        else{
          Toast.fire({type: 'info',title: 'Please add a valid card first'})
        }
      }
    })
  },
  /**
    * Charges the user's card
    * Saves the user reservation in store
    * @param {amount}
    * @return {null}
    */
  chargeCard(amount){
    this.numberOfTickets = amount;
    Swal.fire({
      title: amount * 10 + ' DOLLARS WILL BE CHARGED' ,
      text: " to your card : " + User.maskCard(this.$store.getters.getCard.number),
      type: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'BUY',
      cancelButtonText: 'NO'
    })
      .then((result) => {
            if (result.value) {
              Toast.fire({type: 'success',title: 'Booked'})
              this.$router.push({name:'/'});
              User.makeReservation(this.$store.getters.get,this.numberOfTickets);
            }})
  },
  /**
    * Notifies the user if the tickets are sold out
    * @param {}
    * @return {null}
    */
  soldOut(){
    Toast.fire({type: 'info',title: 'SOLD OUT'})
  },
  /**
    * Deletes the user's reservation
    * @param {}
    * @return {null}
    */
  deleteReservation(){
    Swal.fire({
      title: "Are YOUR SURE" ,
      text: " DELETE " + this.movie.Title ,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'DELETE',
      cancelButtonText: 'NO'
    })
      .then((result) => {
            if (result.value) {
              Toast.fire({type: 'success',title: 'DELETED'})
              User.deleteReservation(this.movie);
              this.$router.push({name:'/'});
            }})
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
width:250px;
height: 80px;
border-radius: 10px;
border: 1px solid #ffffff;
color: #A5FFEE;
padding:5px;
font-size: 20px;
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
