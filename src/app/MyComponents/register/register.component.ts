import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user : any;
  countries :any;
  
  constructor(private router: Router, private service: UserService) { }

  ngOnInit() {
    this.service.getAllCountries().subscribe((data: any) => {
      this.countries = data;
      console.log(data);
    });
  }

  userRegistration(regFrom: any) {
    console.log(regFrom);
   

    this.user = {
      userId: regFrom.userId,
      userName: regFrom.userName,
      address: regFrom.address,
      contactNo: regFrom.phnNumber,
      country: regFrom.country,
      emailId: regFrom.emailId,
      password: regFrom.password
    };


    this.service.registerUser(this.user).subscribe((result: any) => {console.log(result)});

    alert('User Registration Done Successfully...');
    this.router.navigate(['Login']);
  }

}
