Vue.component("faq",{
`
<template>
  <div v-center>

      <button class="faq" @click="this.show_box">Where can i use Swizzle? </button>
      <div class="filter" v-if="show">
        <p>Right now Swizzle is partnered with BoxMovies only.
      </p>
      </div>

      <button class="faq" @click="this.show_box1">Why should I use Swizzle? </button>
      <div class="filter" v-if="show1">
        <p>It comes down to three things: <br/>
      Now Showing - You can browse all the movies being shown at BoxMovie Cinema.
      <br/>
      Book - You can book tickets for movies being shown at BoxMovies Cinema.
      <br/>
      Coming Soon - You can get to kown about the upcoming movies.</p>
      </div>

      <button class="faq" @click="this.show_box2">How can i pay for my bookings? </button>
      <div class="filter" v-if="show2">
        <p>You can pay through card only.</p>
      </div>
      <button class="faq" @click="this.show_box3">Can i get a refund if i miss a movie? </button>
      <div class="filter" v-if="show3">
        <p>No, we can't help you with that.</p>
      </div>

      <button class="faq" @click="this.show_box4">Will I have to show my ID if I book through Swizzle? </button>
      <div class="filter" v-if="show4">
        <p>Yes, you will be required to show ID to verify your age and credit card.</p>
      </div>

      <button class="faq" @click="this.show_box5">Can i view my bookings? </button>
      <div class="filter" v-if="show5">
        <p>Yes, we have a seperate page for that.</p>
      </div>

  </div>
</template>
`
<script>

  export default{
  name: 'faq',
  data(){
    return{
      show:false,
      show1:false,
      show2:false,
      show3:false,
      show4:false,
      show5:false
    }
  },
  methods:{
    show_box(){
        this.show=!this.show;
        return null;
      },
      show_box1(){
        this.show1=!this.show1;
        return null;
      },
      show_box2(){
        this.show2=!this.show2;
        return null;
      },
      show_box3(){
        this.show3=!this.show3;
        return null;
      },
      show_box4(){
        this.show4=!this.show4;
        return null;
      },
      show_box5(){
        this.show5=!this.show5;
        return null;
      }
  }
}
</script>

<style scoped>

  html{
    outline: none;
  }

.faq {
  background-color: black;
  color: white;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: center;
  outline: none;
  font-size: 30px;
  transition: 0.4s;
}

 .faq:hover {
  background-color: rgba(225,255,255,0.4);
  color:black;
}

.active:hover{
  background-color:black;
  color:white;
}

.filter {
  text-align:center;
  background-color: rgba(225,255,255,0.4);
  padding: 58px;
  overflow: hidden;
  outline: none;
}


</style>
