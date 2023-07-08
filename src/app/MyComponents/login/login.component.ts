import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : any;

  constructor(private router: Router, private service: UserService) { }

  ngOnInit(){
  }

  async login(loginForm: any) {
    console.log(loginForm);   

    if (loginForm.loginId === 'ADMIN' && loginForm.password === 'ADMIN') {
      alert('Welcome to HR Home Page');
     
      this.service.setUserLoggedIn();
      this.router.navigate(['showUsers']);
    } 
    else {

        await this.service.getUser(loginForm).then((empData: any) => {
          this.user = empData;
          console.log(empData);
        });

        if (this.user != null) {
          this.service.setUserLoggedIn();
          alert('User loggedIn successfully!!');
          this.router.navigate(['Home']);
        } else {
          alert('Invalid Credentials');
          this.router.navigate(['Login']);
        }   
    }
  }

    
}