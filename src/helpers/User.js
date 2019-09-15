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

    var reservations = Storage.getReservation();
    Storage.deleteReservation();

    if (this.loggedIn()){
      Storage.empty();
    }

    Storage.store(user,password);

    Storage.saveReservation(reservations);

    return true;
  }

  logout(){

    Storage.empty();

  }

  maskCard(number){

    return number.substr(0,5) + "XXXX " + "XXXX " + number.substr(15,19);

  }

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

  getReservation(){

    return JSON.parse(Storage.getReservation());

  }

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
