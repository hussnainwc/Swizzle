class Storage {

  /**
  * Stores username and password in session and local Storage
  * @param {user,password}
  * @return {null}
  */
  store(user,password){
    sessionStorage.setItem('user', user);
    sessionStorage.setItem('password', btoa(password));
    localStorage.setItem('user',user);
    localStorage.setItem('password',btoa(password));
  }

  /**
  * Removes username and password from session Storage
  * @param {user,password}
  * @return {null}
  */
  empty(){
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('password');
  }

  /**
    * Checks username and password in local Storage
    * @param {user,password}
    * @return {boolean}
    */
  check(user,password){
    let User = localStorage.getItem('user');
    let Password = localStorage.getItem('password');

    if(user === User && btoa(password) === Password){
      sessionStorage.setItem('user',user);
      return true;
    }

    return false;

  }

  /**
    * Returns the user from session Storage
    * @param {}
    * @return {user}
    */
  getUser(){

    return sessionStorage.getItem('user');

  }

  /**
    * Saves reservations made by the current user
    * @param {reservation}
    * @return {null}
    */
  saveReservation(reservation){

    localStorage.setItem(this.getUser(),reservation);

  }

  /**
    * Returns reservations for the current user
    * @param {}
    * @return {reservation}
    */
  getReservation(){

    return localStorage.getItem(this.getUser());

  }

  /**
    * Deletes the reservation of the current user
    * @param {}
    * @return {null}
    */
  deleteReservation(){

    localStorage.removeItem(this.getUser());

  }

}

export default Storage = new Storage()
