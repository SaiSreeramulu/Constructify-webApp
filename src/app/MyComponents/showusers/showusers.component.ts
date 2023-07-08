import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-showusers',
  templateUrl: './showusers.component.html',
  styleUrls: ['./showusers.component.css']
})
export class ShowusersComponent implements OnInit {

  user : any;
  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.getAllUsers().subscribe((userData: any) => { this.user = userData;});
  }

}
