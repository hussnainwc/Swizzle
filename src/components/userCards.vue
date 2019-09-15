Vue.component("userCards",{
`
<template>
  <div v-center>
    <div class="creditCard">
          <inline-credit-card-field v-model="card"></inline-credit-card-field>
    </div>

    <input @click="addCard()" class="creditCard-button" type="button" id="addCARD" value="ADD THIS CARD">

  </div>
</template>
`
<script>

export default {

  name: 'userCards',
  components: {
    InlineCreditCardField: () => import('vue-credit-card-field/src/Components/InlineCreditCardField')
  },
  data(){
    return{
      card:{},
      hasCard:false
    }
  },
  created(){
    let Card = this.$store.getters.getCard;
    if(Card == undefined){
      this.hasCard = false;
    }
    else{
      this.hasCard = true;
    }
  },
  methods:{
    addCard(){
      if(this.card.postalCode != ""){
        if(!this.hasCard){
          this.$store.commit('setCard',this.card);
        }
        else{
          Swal.fire({
            title: 'YOU ALREADY HAVE A VALID CARD',
            text: 'CLICK CONFIRM TO UPDATE',
            type: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'UPDATE',
            cancelButtonText: 'CANCEL'
          })
          .then((result) => {
            if (result.value) {
              this.$store.commit('setCard',this.card)
            }
          })
        }
      }
      else{
        Toast.fire({type: 'error',title: 'EMPTY DETAILS'})
      }
    }
  }
}
</script>

<style scoped>

.disabled:hover{
  cursor: not-allowed !important;
}

.creditCard{
  margin-top:20%;
  width:20%;
  margin-left:auto;
  margin-right:auto
}

.creditCard:hover{
  border-radius:2px;
  border:3px solid #A5FFEE;
}

.creditCard-button{
  margin-top:50px;
  margin-left:auto;
  margin-right:auto;
  width:320px;
  height: 80px;
  border-radius: 10px;
  border: 1px solid #ffffff;
  color: #A5FFEE;
  padding:5px;
  cursor: pointer;
  outline: none;
  background-color: #A5A5A5;
}

.creditCard-button:hover{
  background-color: rgba(255,255,255,0.4);
  color:#A5FFEE;
}

@media only screen and (max-width:1540px) {
  .creditCard{
    margin-top:20%;
    width:30%;
    margin-left:auto;
    margin-right:auto
  }

  .creditCard-button{
    margin-top:50px;
    margin-left:auto;
    margin-right:auto;
    width:270px;
    height: 60px;
    border-radius: 10px;
    border: 1px solid #ffffff;
    color: #A5FFEE;
    padding:5px;
    cursor: pointer;
    outline: none;
    background-color: #A5A5A5;
  }
}

@media only screen and (max-width:1020px) {
  .creditCard{
    margin-top:25%;
    width:40%;
    margin-left:auto;
    margin-right:auto
  }

  .creditCard-button{
    margin-top:50px;
    margin-left:auto;
    margin-right:auto;
    width:220px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid #ffffff;
    color: #A5FFEE;
    padding:5px;
    cursor: pointer;
    outline: none;
    background-color: #A5A5A5;
  }

}

@media only screen and (max-width:1020px) {
  .creditCard{
    margin-top:30%;
    width:50%;
    margin-left:auto;
    margin-right:auto
  }

  .creditCard-button{
    margin-top:50px;
    margin-left:auto;
    margin-right:auto;
    width:170px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #ffffff;
    color: #A5FFEE;
    padding:5px;
    cursor: pointer;
    outline: none;
    background-color: #A5A5A5;
  }
}

@media only screen and (max-width:600px) {
  .creditCard{
    margin-top:30%;
    width:70%;
    margin-left:auto;
    margin-right:auto
  }

  .creditCard-button{
    margin-top:50px;
    margin-left:auto;
    margin-right:auto;
    width:120px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #ffffff;
    color: #A5FFEE;
    padding:5px;
    cursor: pointer;
    outline: none;
    background-color: #A5A5A5;
  }

}


</style>
