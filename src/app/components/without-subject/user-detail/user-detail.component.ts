import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../services/user.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  firstName : string;
  
  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe(
      serviceData => this.firstName = serviceData.FirstName
    );
  }

  UpdateUser() {
    this.userService.updateUser().subscribe(
      serviceData => this.firstName = serviceData.FirstName
    );
  }
}
