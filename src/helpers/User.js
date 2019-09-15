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

  update(user,password){

    if (this.loggedIn()){
      Storage.empty();
    }

    Storage.store(user,password);

    return true;
  }

  logout(){

    Storage.empty();

  }

  maskCard(number){

    return number.substr(0,5) + "XXXX " + "XXXX " + number.substr(15,19);

  }

}

export default User = new User();
