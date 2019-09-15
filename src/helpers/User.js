class User{

  loggedIn(){

    return Storage.getUser() != undefined ? true : false;

  }

  login(user,password){

    return Storage.check(user,password) ? true : false;

  }

  signup(user,password){

    if (this.loggedIn()){
      Storage.empty();
    }

    Storage.store(user,password);

    return true;
  }

  logout(){
    
    Storage.empty();

  }

}

export default User = new User();
