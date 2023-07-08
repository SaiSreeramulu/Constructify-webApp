import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isUserLoggedIn: boolean;
  loginStatus: Subject<any>;

  //Implementing Dependency Injection for HttpClient using Constructor
  constructor(private http: HttpClient) { 
    this.isUserLoggedIn = false;
    this.loginStatus = new Subject();
  }

  //LoginSuccess
  setUserLoggedIn() {
    this.isUserLoggedIn = true;
    this.loginStatus.next(true);
  }

  getLoginStatus(): any {
    return this.loginStatus.asObservable();
  }

  getUserLoggedStatus(): boolean {
    return this.isUserLoggedIn;
  }

  setUserLogout() {
    this.isUserLoggedIn = false;
    this.loginStatus.next(false);
  }

  getAllCountries(): any {
    return this.http.get('https://restcountries.com/v3.1/all');
  }

  registerUser(user: any) {
    return this.http.post('/registerUser', user);
  }

  
getAllUsers(): any {
  return this.http.get('getAllUsers');
}

getUser(loginForm: any): any {
  return this.http.get('/userLogin/' + loginForm.loginId + "/" + loginForm.password).toPromise();
}


}
