Vue.component("auth",{
`
<template>
  <div v-center>

  <h1 class="white pointer top">
    <span  v-center @click="signupForm()">SIGN UP</span>
    |
    <span  v-center @click="loginForm()"> LOGIN </span>
 </h1>

 <div v-center>

     <transition name="component-fade" mode="out-in"> <!-- transition between components -->
     <keep-alive> <!-- Stores the component in cache -->
     <component :is="newUser"></component> <!-- Dynamic components -->
     </keep-alive>
   </transition>

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
      newUser:"signup"
    }
  },
  methods:{

    /**
      * Sets the Sign up form as the active component
      * @param {}
      * @return {null}
      */
    signupForm(){
      this.newUser = "signup";
    },

    /**
      * Sets the Login form as the active component
      * @param {}
      * @return {null}
      */
    loginForm(){
      this.newUser = "login";
    }
  }
}
</script>

<style scoped>

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity.3s ease;
}
.component-fade-enter, .component-fade-leave-to{
  opacity: 0;
}

@media only screen and (max-width:1150px) {
  .top{
    margin-top: 10%;
    font-size:medium;
  }
}

@media only screen and (max-width:822px) {
  .top{
    margin-top: 20%;
    font-size:medium;
  }
}

</style>
