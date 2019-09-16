Vue.component("user",{
`
<template>
  <div v-center>

    <form @submit.prevent="update"> <!-- Event modifier -->
      <!-- V-model for two way data binding for forms -->
      <br>
      <input class="update-input" type="text" name="username" autocomplete="off" v-model="username" placeholder="USER NAME"/>
      <br>
      <input class="update-input" type="password" name="password" autocomplete="off" v-model="password" placeholder="PASSWORD"/>
      <br>
      <input class="update-button" type="submit" name="submit" value="UPDATE"/>
    </form>

  </div>
</template>
`
<script>

import { EventBus } from '../events.js'; // EventBus to emit events globally

export default {
  name: 'user',
  data(){
    return{
      username:'',
      password:''
    }
  },
  created(){
    this.username = Storage.getUser(); // Get user from the storage
  },
  methods:{
    /**
      * Checks if password field is empty
      * If validation passes authorize and emit an event
      * Fires a notification if the update is successfull
      * @param {}
      * @return {null}
      */
    update(){
      if(this.password != ''){
        this.$Progress.start();
        if(User.signup(this.username,this.password)){
          EventBus.$emit('authorized',this.username);
          this.$Progress.finish();
          Toast.fire({type: 'success',title: 'Succesfuly Updated'})
        }
        else{
          this.$Progress.fail();
          Toast.fire({type: 'error',title: 'Failed to update'})
        }
      }
      else{
        Toast.fire({type: 'error',title: 'Please enter a Password'})
      }
    }
  }
}
</script>

<style scoped>

.update-input{
  margin:30px;
  width:300px;
  height:50px;
  border-radius: 5px;
  border: 1px solid #ffffff;
  padding:5px;
  background-color:  rgba(255,255,255,0.4);
  color:#ffffff;
}

.update-input:hover{
  border: 3px solid #A5FFEE;
}

.update-button{
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

.update-button:hover{
  background-color: rgba(255,255,255,0.4);
  color:#A5FFEE;
}

</style>
