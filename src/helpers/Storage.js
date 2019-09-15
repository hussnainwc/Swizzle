class Storage {

  store(user,password){
    sessionStorage.setItem('user', user);
    sessionStorage.setItem('password', btoa(password));
  }

  empty(){
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('password');
  }

  check(user,password){
    let User = sessionStorage.getItem('user');
    let Password = sessionStorage.getItem('password');

    if(user === User && btoa(password) === Password){
      return true;
    }

    return false;

  }

  getUser(){
    return sessionStorage.getItem('user');
  }

}

export default Storage = new Storage()
