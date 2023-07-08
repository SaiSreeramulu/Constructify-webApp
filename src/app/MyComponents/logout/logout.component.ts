import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private service: UserService, private router: Router) {
    this.service.setUserLogout();
    this.router.navigate(['Login']);
  }

  ngOnInit(){
  }

}
