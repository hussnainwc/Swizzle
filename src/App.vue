<template>
  <div id="app">
    <navigation></navigation>
    <router-view>{{this.greeting}}</router-view>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
import navigation from './components/navigation.vue'
export default {

  name: 'app',
  components: {
    navigation
  },
  data(){
    return{
      greetings:["WELCOME","HOWDY","GREETINGS","HOW'S IT GOING","FINE DAY"],
      greeting:''
    }
  },
  created(){
      this.greeting = this.greetings[Math.floor(Math.random() * (+4 - +0)) + +0];
    }
  }

</script>

<style lang="scss">

@import '~sweetalert2/src/variables';

$swal2-background: #191919;

@import '~sweetalert2/src/sweetalert2';

html{
  font-family: Helvetica;
  font-size: 100%;
  overflow-x: hidden;
  margin:0;
  padding:0;
  min-height:100%;
}
body{
  padding:0;
  margin:0;
  background-color:#191919;
}
.center-div{
  text-align: center;
}
.center-div-inline{
  display: inline-block;
}
.clickable:hover{
  cursor: pointer;
}

.white{
  color:white;
}

.pointer{
  cursor: pointer;
}
</style>
