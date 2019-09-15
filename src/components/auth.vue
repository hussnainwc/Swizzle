Vue.component("auth",{
`
<template>
  <div v-center>

  <h1 class="white pointer">
    <span  v-center @click="signupForm()">SIGN UP</span>
    |
    <span  v-center @click="loginForm()"> LOGIN </span>
 </h1>

 <div v-center>
   
   <keep-alive>
   <signup v-if="newUser"></signup>
   </keep-alive>

   <keep-alive>
   <login v-if="!newUser"></login>
   </keep-alive>

 </div>

  </div>
</template>
`
<script>
  import login from './login';
  import signup from './signup';

  export default{
  components: {
    login : () => import("./login"),
    signup : () => import("./signup")
  },
  name: 'auth',
  data(){
    return{
      newUser:true
    }
  },
  methods:{
    signupForm(){
      this.newUser = true;
    },
    loginForm(){
      this.newUser = false;
    }
  }
}
</script>

<style scoped>

</style>
