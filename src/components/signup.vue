Vue.component("signup",{
`
<template>
  <div v-center>

    <form @click="placeholder()" @submit.prevent="signup"> <!-- Event modifier -->
      <!-- V-model for two way data binding for forms -->
      <input @click="clear('username')" class="signup-input" type="text" name="username" autocomplete="off" v-model="username" placeholder="USER NAME"/>
      <br>
      <input @click="clear('password')" class="signup-input" type="password" name="password" autocomplete="off" v-model="password" placeholder="PASSWORD"/>
      <br>
      <input @click="clear('age')" type="text" v-model="age" class="signup-input" autocomplete="off" placeholder="AGE"/>
      <br>
      <input @click="clear('gender')" type="text" v-model="gender" class="signup-input" autocomplete="off" placeholder="GENDER"/>
      <br>
      <input @click="clear('email')" type="email" v-model="email" class="signup-input" autocomplete="off" placeholder="EMAIL"/>
      <br>
      <input class="signup-button" type="submit" name="submit" value="SIGN UP"/>
    </form>

  </div>
</template>
`
<script>

import { EventBus } from '../events.js'; // EventBus to emit events globally

export default {
  name: 'signup',
  data(){
    return{
      username:'USERNAME',
      password:'PASSWORD',
      age:'AGE',
      gender:'GENDER',
      email:'EMAIL',
      clicked:""
    }
  },
  methods:{
    /**
      * Checks if password field is empty
      * If validation passes authorize and emit an event
      * Pushes user to home page
      * Fires a notification if the Sign up is successfull
      * @param {}
      * @return {null}
      */
    signup(){
      this.$Progress.start();
      if(User.signup(this.username,this.password)){
        EventBus.$emit('authorized',this.username);
        this.$router.push({name:'/'});
        this.$Progress.finish();
        Toast.fire({type: 'success',title: 'Sign up Succesful'})
      }
      else{
        this.$Progress.fail();
        Swal.fire({
          title: 'Error',
          text:'Username cannot be longer than 10 characters or you left the password field empty',
          type: 'error',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
        })
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

.signup-input{
  margin:30px;
  width:300px;
  height:50px;
  border-radius: 5px;
  border: 1px solid #ffffff;
  padding:5px;
  background-color:  rgba(255,255,255,0.4);
  color:#ffffff;
}

.signup-input:hover{
  border: 3px solid #A5FFEE;
}

.signup-button{
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

.signup-button:hover{
  background-color: rgba(255,255,255,0.4);
  color:#A5FFEE;
}

@media only screen and (max-width:1540px) {
  .signup-input{
    margin:30px;
    width:250px;
    height:50px;
    border-radius: 5px;
    border: 1px solid #ffffff;
    padding:5px;
    background-color:  rgba(255,255,255,0.4);
    color:#ffffff;
  }

  .signup-button{
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
  .signup-input{
    margin:20px;
    width:200px;
    height:40px;
    border-radius: 5px;
    border: 1px solid #ffffff;
    padding:5px;
    background-color:  rgba(255,255,255,0.4);
    color:#ffffff;
  }

  .signup-button{
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
  .signup-input{
    margin:10px;
    width:150px;
    height:20px;
    border-radius: 5px;
    border: 1px solid #ffffff;
    padding:5px;
    background-color:  rgba(255,255,255,0.4);
    color:#ffffff;
  }

  .signup-button{
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
  .signup-input{
    margin:10px;
    width:100px;
    height:20px;
    border-radius: 5px;
    border: 1px solid #ffffff;
    padding:5px;
    background-color:  rgba(255,255,255,0.4);
    color:#ffffff;
  }

  .signup-button{
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
