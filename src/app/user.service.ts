import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isUserLoggedIn: boolean;

  //Implementing Dependency Injection for HttpClient using Constructor
  constructor(private http: HttpClient) { 
    this.isUserLoggedIn = false;
  }

  //LoginSuccess
  setUserLoggedIn() {
    this.isUserLoggedIn = true;
  }

  getUserLoggedStatus(): boolean {
    return this.isUserLoggedIn;
  }

  setUserLogout() {
    this.isUserLoggedIn = false;
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
