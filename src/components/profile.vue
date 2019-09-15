Vue.component("profile",{
`
<template>
  <div v-center>
    <br>
    <h1 v-color="'white'"><slot>HELLO</slot> {{this.user | capitalize | catch("User") }}</h1>
    <br>
    <br>
    <router-link to="/user"><button class="profile-button" type="submit" name="submit" value="EDIT PROFILE">EDIT PROFILE</button></router-link>
    <br>
    <br>
    <router-link to="/userCards"><button class="profile-button" type="submit" name="submit" value="ADD CARD">ADD CARD</button></router-link>
    <br>
    <br>
    <router-link to="/reservations"><button class="profile-button" type="submit" name="submit" value="VIEW RESERVATIONS">VIEW RESERVATIONS</button></router-link>
    <br>
    <br>
  </div>
</template>
`
<script>

export default {
  name: 'profile',
  data(){
    return{
      user:Storage.getUser()
    }
  }
}
</script>

<style scoped>

.profile-button{
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

.profile-button:hover{
  background-color: rgba(255,255,255,0.4);
  color:#A5FFEE;
}

</style>
