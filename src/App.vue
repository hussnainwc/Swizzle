<template>
  <div id="app">
    <navigation></navigation> <!-- Navigation component !-->
    <router-view></router-view> <!-- Vue-router !-->
  </div>
</template>

<script>
import navigation from './components/navigation.vue'
export default {
  name: 'app',
  components: {
    navigation
  }
}
</script>

<style lang="scss"> // SCSS support added

@import '~sweetalert2/src/variables';

$swal2-background: #191919;

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
