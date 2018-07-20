import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../services/user.service";

@Component({
  selector: 'app-user-subject-detail',
  templateUrl: './user-subject-detail.component.html',
  styleUrls: ['./user-subject-detail.component.css']
})
export class UserSubjectDetailComponent implements OnInit {

  firstName : string;

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.userInfoSubject.
      subscribe(data => this.firstName = data.FirstName);

    this.userService.getUserUsingSubject();
  }

  UpdateUserUserSubject(){
    this.userService.updateUserUsingSubject();
  }

}
