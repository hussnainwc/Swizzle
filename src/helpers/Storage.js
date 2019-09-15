class Storage {

  store(user,password){
    sessionStorage.setItem('user', user);
    sessionStorage.setItem('password', btoa(password));
    localStorage.setItem('user',user);
    localStorage.setItem('password',btoa(password));
  }

  empty(){
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('password');
  }

  check(user,password){
    let User = localStorage.getItem('user');
    let Password = localStorage.getItem('password');

    if(user === User && btoa(password) === Password){
      sessionStorage.setItem('user',user);
      return true;
    }

    return false;

  }

  getUser(){

    return sessionStorage.getItem('user');

  }

  saveReservation(reservation){

    localStorage.setItem(this.getUser(),reservation);

  }

  getReservation(){

    return localStorage.getItem(this.getUser());

  }

  deleteReservation(){

    localStorage.removeItem(this.getUser());

  }

}

export default Storage = new Storage()
