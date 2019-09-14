<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>
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

<style>

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

</style>
