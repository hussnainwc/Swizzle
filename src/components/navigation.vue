Vue.component("navigation",{
`
<template>
  <div>
    <header>
      <div class="container">
        <!-- Router link acts as an a tag which directs user to linked path -->
        <div id="logo"><router-link to="/"><img src="../assets/swizzle.png" alt="LOGO"></router-link></div>
        <nav id="showing-nav">
          <ul class="showing-nav-ul">
            <li class="showing-nav-li"><router-link to="/now">NOW SHOWING</router-link></li>
            <li class="showing-nav-li"><router-link to="/soon">COMING SOON</router-link></li>
          </ul>
        </nav>
        <nav id="search-login-nav">
          <ul class="search-login-nav-li">
            <li class="search-login-nav-li" id="Search-Button-Expand">
            <button id="search_button">
              <img @click="search()" src="../assets/search.png" alt="search" >
            </button>
            <input v-model="tittle" id="SearchBox" name="SearchBox" autocomplete="off" type="text" placeholder="Search"/>
            </li>
            <li class="search-login-nav-li" style="margin-top:20px;">
              <!-- Conditional rendering based on autherization -->
              <router-link v-if="!authorized" to="/auth">SIGN UP</router-link>
              <router-link v-else to="#"><span @click="userOptions()">{{this.user}}</span></router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <br>
  </div>
</template>
`
<script>

import { EventBus } from '../events.js'; // EventBus to listen to emitted events

export default {
  name: 'navigation',
  data(){
    return{
      tittle:"",
      user:Storage.getUser(), // Get user from storage
      authorized:User.loggedIn(), // CHecks if the user is authenticated
      movieDetials:{}
    }
  },
  mounted(){
    EventBus.$on('authorized',(user)=>{
      this.render(user); // Used to rerender the navigation component
    });
    EventBus.$on('logout',(user)=>{
      this.render(user) // Used to rerender the navigation component
    })
  },
  methods:{
    /**
      * Queries end point with searched word from the user and assigns response to movieDetails object
      * Commits movieDetails and path to the store
      * @param {}
      * @return {null}
      */
    search(){
        axios.get("http://www.omdbapi.com/?t="+ this.tittle.toLowerCase() +"&apikey=a921d199")
        .then((response)=>{
          if(response.data.Error == "Movie not found!"){
            Swal.fire({
              title: 'MOVIE NOT FOUND',
              type: 'error',
              showCancelButton: false,
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'OK'
            })
            this.tittle = ""
          }
          else{
            this.tittle = ""
            this.movieDetials =  response.data;
            this.$store.commit('setPath','/navigation');
            this.$store.commit('set',this.movieDetials);
            this.$router.push({name:'movie'})
          }
        })
    },
    /**
      * Rerenders navigation bar
      * @param {user}
      * @return {null}
      */
    render(user){
      this.authorized =  User.loggedIn();
      this.user = Storage.getUser();
    },
    /**
      * Pop up modal which asks users if they want to go to profile or log out
      * @param {}
      * @return {null}
      */
    userOptions(){
      Swal.fire({
        title: 'HOW CAN WE HELP ?',
        type: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'MY PROFILE',
        cancelButtonText: 'LOGOUT'
      })
        .then((result) => {
              if (result.value) {
                this.$router.push({name:'profile'})
              }
              else{
                if(result.dismiss == "cancel"){
                  this.logout();
                }
              }
            })
    },
    /**
      * Logs out the user
      * @param {}
      * @return {null}
      */
    logout(){
      User.logout();
      EventBus.$emit('logout');
      this.$router.push({name:'/'})
    }
  }
}
</script>

<style scoped>

header{
  min-height:80px;
  background-color:#191919;
  margin:0;
  padding:0;
}

.container{
  width:100%;
  min-height:81px;
  margin:0;
  padding:0;
}

#logo{
  min-height:80px;
  width:100;
  float: left;
}

#logo img{
  height:80px;
  width:200px;
}

#showing-nav{
  float:left;
}

.showing-nav-ul{
padding:0;
margin:0;
}

.showing-nav-li{
  margin-top: 35px;
  float:left;
  display:inline;
  padding: 0 50px 0 50px;
}

.container a{
  color:#ffffff;
  text-decoration:none;
  font-size:20px;
  font-family:Helvetica,arial,"sans-serif";
  font-weight: bold;
  cursor: pointer;
}

.container a:hover{
  color:#A5FFEE;
}

#search-login-nav{
  float:right;
  margin-right:1%;
}

.search-login-nav-ul{
  padding:0;
  margin:0;
  list-style: none;
}

.search-login-nav-li{
  margin-top: 15.5px;
  float:left;
  display:inline;
  padding: 0px 50px 0 50px;
}

.search-login-nav-li button{
  background-color: Transparent;
  background-repeat:no-repeat;
  border: none;
  cursor:pointer;
  overflow: hidden;
  outline:none;
}

.search-login-nav-li img{
  height:20px;
  width:20px;
}

#SearchBox[type=text] {
  position: relative;
  top: -2px;
  opacity: 0;
  margin-bottom:3px;
  padding-left:10px;
  background-color:Transparent;
  border:none;
  font-size:15px;
  padding-top:10px;
  font-weight: bold;
  color:#ffffff;
  animation-name: example;
  animation-duration:2.5s;
  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  -o-animation-fill-mode: forwards;
  -ms-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}

@keyframes example {
        0%   {opacity:0}
        50%  {opacity:0.5}
    100%  {opacity:1}
}

#SearchBox[type=text]:focus{
  outline: none;
  color:#ffffff;
}

#SearchBox::placeholder {
  color:#adadad;
  font-weight: 100;
  font-size:22px;
}

#SearchBox:hover{
  cursor:pointer;
}

#SearchBox:hover::placeholder{
  cursor:pointer;
  padding-bottom:20px;
  border-bottom:2px solid #ffffff;
  color:#A5FFEE;
}


@media only screen and (max-width:1368px) {
  .showing-nav-li{
    margin-top: 35px;
    float:right;
    display:inline;
    padding: 0 25px 0 25px;
  }

  .search-login-nav-li{
    margin-top: 15.5px;
    float:left;
    display:inline;
    padding: 0 25px 0 25px;
  }
}

@media only screen and (max-width:1118px) {

  #logo{
    min-height:80px;
    width:100%;
    text-align: center;
  }

  #logo img{
    height:80px;
    width:200px;
    display: inline-block;
  }

  #showing-nav{
    float: left;
  }

  .showing-nav-ul{
  padding:0;
  margin:0;
  }

  .showing-nav-li{
    margin-top: 35px;
    float:right;
    display:inline;
    padding: 0 30px 0 30px;
  }

  .container a{
    color:#ffffff;
    text-decoration:none;
    font-size:20px;
    font-family:Helvetica,arial,"sans-serif";
    font-weight: bold;
  }

  .container a:hover{
    color:#A5FFEE;
  }

  #search-login-nav{
    float: right;
  }

  .search-login-nav-ul{
    padding:0;
    margin:0;
    list-style: none;
  }

  .search-login-nav-li{
    margin-top: 15.5px;
    float:left;
    display:inline;
    padding: 0px 25px 0 25px;
  }

  .search-login-nav-li button{
    background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden;
    outline:none;
  }

  .search-login-nav-li img{
    height:20px;
    width:20px;
  }

  #SearchBox[type=text] {
    position: relative;
    top: -2px;
    opacity: 0;
    margin-bottom:3px;
    padding-left:10px;
    background-color:Transparent;
    border:none;
    font-size:15px;
    padding-top:10px;
    font-weight: bold;
    color:#ffffff;
    animation-name: example;
    animation-duration:2.5s;
    -webkit-animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
    -o-animation-fill-mode: forwards;
    -ms-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }

  @keyframes example {
          0%   {opacity:0}
          50%  {opacity:0.5}
      100%  {opacity:1}
  }

  #SearchBox[type=text]:focus{
    outline: none;
    color:#ffffff;
  }

  #SearchBox::placeholder {
    color:#adadad;
    font-weight: 100;
    font-size:22px;
  }

  #SearchBox:hover{
    cursor:pointer;
  }

  #SearchBox:hover::placeholder{
    cursor:pointer;
    padding-bottom:20px;
    border-bottom:2px solid #ffffff;
    color:#A5FFEE;
  }

  @media only screen and (max-width:932px) {

    #logo{
      min-height:80px;
      width:100%;
      text-align: center;
    }

    #logo img{
      height:80px;
      width:200px;
      display: inline-block;
    }

    #showing-nav{
      float: left;
    }

    .showing-nav-ul{
    padding:0;
    margin:0;
    }

    .showing-nav-li{
      margin-top: 35px;
      float:right;
      display:inline;
      padding: 0 30px 0 30px;
    }

    .container a{
      color:#ffffff;
      text-decoration:none;
      font-size:15px;
      font-family:Helvetica,arial,"sans-serif";
      font-weight: bold;
    }

    .container a:hover{
      color:#A5FFEE;
    }

    #search-login-nav{
      float: right;
    }

    .search-login-nav-ul{
      padding:0;
      margin:0;
      list-style: none;
    }

    .search-login-nav-li{
      margin-top: 15.5px;
      float:left;
      display:inline;
      padding: 0px 25px 0 25px;
    }

    .search-login-nav-li button{
      background-color: Transparent;
      background-repeat:no-repeat;
      border: none;
      cursor:pointer;
      overflow: hidden;
      outline:none;
    }

    .search-login-nav-li img{
      height:20px;
      width:20px;
    }

  }

  @media only screen and (max-width:836px) {

    .showing-nav-li{
      margin-top: 35px;
      float:right;
      display:inline;
      padding: 0 20px 0 20px;
    }

    .container a{
      color:#ffffff;
      text-decoration:none;
      font-size:15px;
      font-family:Helvetica,arial,"sans-serif";
      font-weight: bold;
    }

    .search-login-nav-li{
      margin-top: 15.5px;
      float:left;
      display:inline;
      padding: 0px 20px 0 20px;
    }


    .search-login-nav-li img{
      height:20px;
      width:20px;
    }

  }

  @media only screen and (max-width:757px) {

    .showing-nav-li{
      margin-top: 35px;
      float:right;
      display:inline;
      padding: 0 10px 0 10px;
    }

    .container a{
      color:#ffffff;
      text-decoration:none;
      font-size:10px;
      font-family:Helvetica,arial,"sans-serif";
      font-weight: bold;
    }

    .search-login-nav-li{
      margin-top: 15.5px;
      float:left;
      display:inline;
      padding: 0px 10px 0 10px;
    }

    #SearchBox[type=text] {
      position: relative;
      top: -2px;
      opacity: 0;
      margin-bottom:3px;
      background-color:Transparent;
      border:none;
      font-size:10px;
      font-weight: bold;
      color:#ffffff;
      animation-name: example;
      animation-duration:2.5s;
      -webkit-animation-fill-mode: forwards;
      -moz-animation-fill-mode: forwards;
      -o-animation-fill-mode: forwards;
      -ms-animation-fill-mode: forwards;
      animation-fill-mode: forwards;
    }

    #SearchBox::placeholder {
      color:#adadad;
      font-weight: 100;
      font-size:15px;
    }

    .search-login-nav-li img{
      height:13px;
      width:13px;
    }

  }

  @media only screen and (max-width:478px) {

    #logo{
      min-height:60px;
      width:100%;
      text-align: center;
    }

    #logo img{
      height:60px;
      width:150px;
      display: inline-block;
    }

    .showing-nav-li{
      margin-top: 35px;
      float:right;
      display:inline;
      padding: 0px 5px 0 5px;
    }

    .container a{
      color:#ffffff;
      text-decoration:none;
      font-size:9px;
      font-family:Helvetica,arial,"sans-serif";
      font-weight: bold;
    }

    .search-login-nav-li{
      margin-top: 15.5px;
      float:left;
      display:inline;
      padding: 0;
    }

    #SearchBox[type=text] {
      position: relative;
      top: -1px;
      opacity: 0;
      margin-bottom:0px;
      background-color:Transparent;
      border:none;
      font-size:5px;
      font-weight: bold;
      color:#ffffff;
      animation-name: example;
      animation-duration:2.5s;
      -webkit-animation-fill-mode: forwards;
      -moz-animation-fill-mode: forwards;
      -o-animation-fill-mode: forwards;
      -ms-animation-fill-mode: forwards;
      animation-fill-mode: forwards;
    }

    #SearchBox::placeholder {
      color:#adadad;
      font-weight: 100;
      font-size:10px;
    }

    .search-login-nav-li img{
      margin-top:5px;
      height:10px;
      width:10px;
    }

  }


}

</style>
