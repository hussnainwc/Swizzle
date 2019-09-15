Vue.component("signup",{
`
<template>
  <div v-center>

    <form @submit.prevent="signup">
      <input class="signup-input" type="text" name="username" autocomplete="off" v-model="username" placeholder="USER NAME"/>
      <br>
      <input class="signup-input" type="password" name="password" autocomplete="off" v-model="password" placeholder="PASSWORD"/>
      <br>
      <input type="text" class="signup-input" autocomplete="off" placeholder="AGE"/>
      <br>
      <input type="text" class="signup-input" autocomplete="off" placeholder="GENDER"/>
      <br>
      <input type="email" class="signup-input" autocomplete="off" placeholder="EMAIL"/>
      <br>
      <input class="signup-button" type="submit" name="submit" value="SIGN UP"/>
    </form>

  </div>
</template>
`
<script>
export default {
  name: 'signup',
  data(){
    return{
      username:'',
      password:''
    }
  },
  methods:{
    signup(){
      User.signup(this.username,this.password);
    }
  }
}
</script>

<style scoped>

.signup-input{
  margin:30px;
  width:300px;
  height:50px;
  border-radius: 5px;
  border: 1px solid #ffffff;
  padding:5px;
  background-color:  rgba(255,255,255,0.4);
  color:#ffffff;
}

.signup-input:hover{
  border: 3px solid #A5FFEE;
}

.signup-button{
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

.signup-button:hover{
  background-color: rgba(255,255,255,0.4);
  color:#A5FFEE;
}

</style>
