import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginStatus: any;

  constructor(private service: UserService) { }

  ngOnInit() {

    this.service.getLoginStatus().subscribe((loginStatusData: any) => {
      this.loginStatus = loginStatusData;
    });
  }

}
