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

    if(user.length > 10 || password.length == 0){
      return false
    }

    if (this.loggedIn()){
      Storage.empty();
    }

    Storage.store(user,password);

    return true;
  }

  /**
    * Updates the current user's username and password
    * @param {user,password}
    * @return {true}
    */
  update(user,password){

    var reservations = Storage.getReservation();
    Storage.deleteReservation();

    if (this.loggedIn()){
      Storage.empty();
    }

    Storage.store(user,password);

    Storage.saveReservation(reservations);

    return true;
  }

  /**
    * Logs out the current user
    * @param {}
    * @return {null}
    */
  logout(){

    Storage.empty();

  }

  /**
    * Returns user's card details in masked version
    * @param {number}
    * @return {number}
    */
  maskCard(number){

    return number.substr(0,5) + "XXXX " + "XXXX " + number.substr(15,19);

  }

  /**
    * Makes movie reservation for the current user
    * @param {movie,tickets}
    * @return {null}
    */
  makeReservation(movie,tickets){

    let reservation = new Object();
    reservation.movie = movie;
    reservation.tickets = tickets;

    var hasReservation = this.getReservation();

    if (hasReservation != undefined){
      var currentReservations = [];
      Object.keys(hasReservation).forEach((reservation) =>{
        currentReservations.push(hasReservation[reservation]);
      });
      currentReservations.push(reservation);
      Storage.saveReservation(JSON.stringify(currentReservations));
    }
    else{
      var newReservation = [];
      newReservation.push(reservation);
      Storage.saveReservation(JSON.stringify(newReservation));
    }

  }

  /**
    * Returns current user's reservations in JSON
    * @param {}
    * @return {getReservation}
    */
  getReservation(){

    return JSON.parse(Storage.getReservation());

  }

  /**
    * Deletes current user's reservation
    * @param {movie}
    * @return {null}
    */
  deleteReservation(movie){

    var hasReservation = this.getReservation();
    var currentReservations = [];
    Object.keys(hasReservation).forEach((reservation) =>{
      if(hasReservation[reservation].movie.imdbID != movie.imdbID){
        currentReservations.push(hasReservation[reservation]);
      }
    });

    Storage.saveReservation(JSON.stringify(currentReservations));

  }

}

export default User = new User();
