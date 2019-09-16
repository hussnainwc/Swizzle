class User{

  /**
    * Checks if the user is logged in
    * @param {}
    * @return {boolean}
    */
  loggedIn(){

    return Storage.getUser() != undefined ? true : false;

  }

  /**
    * Logs in the user
    * @param {user,password}
    * @return {boolean}
    */
  login(user,password){

    return Storage.check(user,password) ? true : false;

  }

  /**
    * Signs up the user and deletes if any existing user
    * @param {user,password}
    * @return {boolean}
    */
  signup(user,password){

    if (this.loggedIn()){
      Storage.empty();
    }

    Storage.store(user,password);

    return true;
  }

  /**
    * Logs out the user
    * @param {}
    * @return {null}
    */
  logout(){

    Storage.empty();

  }

}

export default User = new User();
