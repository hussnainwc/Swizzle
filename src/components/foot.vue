Vue.component("foot",{
`
<template>
  <div v-center>
      <footer v-center>
        <router-link to="/faq">FAQ</router-link>
      </footer>
  </div>
</template>
`
<script>
  export default{
  name: 'foot',
  data(){
    return{

    }
  }
}
</script>

<style scoped>

  footer{
    border-top: 1px solid white;
    padding:20px;
  }

  a{
    color:#ffffff;
    text-decoration:none;
    font-size:20px;
    font-family:Helvetica,arial,"sans-serif";
    font-weight: bold;
    cursor: pointer;
    outline:none;
  }

  a:hover{
    color:#A5FFEE;
  }

</style>
