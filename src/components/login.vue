Vue.component("login",{
`
<template>
  <div v-center>

    <form @submit.prevent="login">
      <input class="login-input" type="text" name="username" autocomplete="off" v-model="username" placeholder="USER NAME"/>
      <br>
      <input class="login-input" type="password" name="password" autocomplete="off" v-model="password" placeholder="PASSWORD"/>
      <br>
      <input class="login-button" type="submit" name="submit" value="LOGIN"/>
    </form>

  </div>
</template>
`
<script>

import { EventBus } from '../events.js';

export default {
  name: 'login',
  data(){
    return{
      username:'',
      password:''
    }
  },
  methods:{
    login(){
      if(User.login(this.username,this.password)){
        EventBus.$emit('authorized',this.username);
        this.$router.push({name:'/'});
      }
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
  font-size: 30px;
  cursor: pointer;
  outline: none;
  background-color: #A5A5A5;
}

.login-button:hover{
  background-color: rgba(255,255,255,0.4);
  color:#A5FFEE;
}

</style>
