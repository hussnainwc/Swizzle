Vue.component("profile",{
`
<template>
  <div v-center>
    <br>
    <!-- V-color to set element color -->
    <!-- {{ }} Syntax to call data directly -->
    <!-- Catch filter used as fall back in case something doesn't load -->
    <!-- Capitalize function used to capitalize the movie title -->
    <!-- Slots passed in app.vue are inserted here as this the only slot in the entire app -->
    <h1 v-color="'white'"><slot>HELLO</slot> {{this.user | capitalize | catch("User") }}</h1>
    <br>
    <br>
    <!-- Router link acts as an a tag which directs user to linked path -->
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
      user:Storage.getUser() // Get user from storage
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
