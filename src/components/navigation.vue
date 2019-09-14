<template>
  <div>
    <header>
      <div class="container">
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
              <router-link to="#">SIGN UP</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'navigation',
  data(){
    return{
      tittle:""
    }
  },
  methods:{
    search(){
     axios.get("http://www.omdbapi.com/?t="+ this.tittle.toLowerCase() +"&apikey=a921d199")
        .then((result)=>{
          console.log(result);
        });
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


@media only screen and (max-width:1330px) {
  .showing-nav-li{
    margin-top: 35px;
    float:right;
    display:inline;
    padding: 0 30px 0 30px;
  }

  .search-login-nav-li{
    margin-top: 15.5px;
    float:left;
    display:inline;
    padding: 0 30px 0 30px;
  }
}

@media only screen and (max-width:1140px) {

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
    padding: 0px 30px 0 30px;
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
      padding: 0px 30px 0 30px;
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

  @media only screen and (max-width:734px) {

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

  @media only screen and (max-width:468px) {

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
      font-size:10px;
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
