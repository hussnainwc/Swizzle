<template>
  <div id="app">
    <navigation></navigation> <!-- Navigation component !-->
    <router-view>{{ greeting | catch("GREETINGS")}}</router-view> <!-- Vue-router !-->
    <br>
    <br>
    <br>
    <vue-progress-bar></vue-progress-bar>
    <foot v-if="['/','now','soon'].includes($route.name)"></foot>
  </div>
</template>

<script>
import navigation from './components/navigation.vue'
import foot from './components/foot.vue'
export default {

  name: 'app',
  components: {
    navigation,
    foot
  },
  data(){
    return{
      greetings:["WELCOME","HOWDY","GREETINGS","HOW'S IT GOING","FINE DAY"]
    }
  },
  computed:{
      greeting(){
        return this.greetings[Math.floor(Math.random() * (+4 - +0)) + +0];
      }
    }
  }

</script>

<style lang="scss"> // SCSS support added

@import '~sweetalert2/src/variables';

$swal2-background: #191919 !important;

@import '~sweetalert2/src/sweetalert2';

// Global css
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

a {
    outline: none;
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
