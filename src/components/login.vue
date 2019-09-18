Vue.component("login",{
`
<template>
  <div v-center>

    <form @click="placeholder()" @submit.prevent="login"> <!-- Event modifier -->
      <!-- V-model for two way data binding for forms -->
      <input @click="clear('username')" class="login-input" type="text" name="username" autocomplete="off" v-model="username" placeholder="USER NAME"/>
      <br>
      <input @click="clear('password')" class="login-input" type="password" name="password" autocomplete="off" v-model="password" placeholder="PASSWORD"/>
      <br>
      <input class="login-button" type="submit" name="submit" value="LOGIN"/>
    </form>

  </div>
</template>
`
<script>

import { EventBus } from '../events.js'; // EventBus to emit events globally

export default {
  name: 'login',
  data(){
    return{
      username:'USERNAME',
      password:'PASSWORD'
    }
  },
  methods:{
    /**
      * Checks if the user has valid credentials
      * If authorized emits an event
      * Pushes user to home page
      * Fires a notification if the login is successfull
      * @param {}
      * @return {null}
      */
    login(){
      this.$Progress.start(); // Progress bar
      if(User.login(this.username,this.password)){
        EventBus.$emit('authorized',this.username);
        this.$router.push({name:'/'});
        this.$Progress.finish();
        Toast.fire({type: 'success',title: 'Login Succesful'})
      }
      else{
        this.$Progress.fail();
        Toast.fire({type: 'error',title: 'Failed to Login'})
      }
    },
    /**
      * Puts placeholder back for fields if empty
      * @param {inputField}
      * @return {null}
      */
    placeholder(){
      var keys = Object.keys(this.$data);
      var names = Object.keys(this.$data);
      for (var i = 0; i < keys.length - 1; i++) {
        if(this[keys[i]] == "" && names[i] != this.clicked){
          this[keys[i]] = names[i].toUpperCase();
        }
      }
    },
    /**
      * Clears the field clicked on except if it's input from user
      * placeholders didnt seem to work for chrome
      * @param {inputField}
      * @return {null}
      */
    clear(inputField){
      var keys = Object.keys(this.$data);
      for (var i = 0; i < keys.length; i++) {
        if(this[inputField] == keys[i].toUpperCase()){
          this[inputField] = "";
        }
      }
      this.clicked =  inputField;
    }
  }
}
</script>

<style scoped>

.login-input{
  margin:30px;
  width:300px;
  height:50px;
  border-radius: 5px;
  border: 1px solid #ffffff;
  padding:5px;
  background-color:  rgba(255,255,255,0.4);
  color:#ffffff;
}

.login-input:hover{
  border: 3px solid #A5FFEE;
}

.login-button{
  margin:20px;
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

.login-button:hover{
  background-color: rgba(255,255,255,0.4);
  color:#A5FFEE;
}

@media only screen and (max-width:1540px) {
  .login-input{
    margin:30px;
    width:250px;
    height:50px;
    border-radius: 5px;
    border: 1px solid #ffffff;
    padding:5px;
    background-color:  rgba(255,255,255,0.4);
    color:#ffffff;
  }

  .login-button{
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
  .login-input{
    margin:30px;
    width:200px;
    height:40px;
    border-radius: 5px;
    border: 1px solid #ffffff;
    padding:5px;
    background-color:  rgba(255,255,255,0.4);
    color:#ffffff;
  }

  .login-button{
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
  .login-input{
    margin:30px;
    width:150px;
    height:30px;
    border-radius: 5px;
    border: 1px solid #ffffff;
    padding:5px;
    background-color:  rgba(255,255,255,0.4);
    color:#ffffff;
  }

  .login-button{
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
  .login-input{
    margin:30px;
    width:100px;
    height:30px;
    border-radius: 5px;
    border: 1px solid #ffffff;
    padding:5px;
    background-color:  rgba(255,255,255,0.4);
    color:#ffffff;
  }

  .login-button{
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
