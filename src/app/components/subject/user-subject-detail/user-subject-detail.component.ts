import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../services/user.service";
import { UserInfo } from '../../../model/UserInfo';
import { map, filter } from '../../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-user-subject-detail',
  templateUrl: './user-subject-detail.component.html',
  styleUrls: ['./user-subject-detail.component.css']
})
export class UserSubjectDetailComponent implements OnInit {

  firstName : string;
  roleId : number;
  userInfo : UserInfo;
  userList : UserInfo[];
  userId : number;

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.userInfoSubject.
      subscribe(data => this.userInfo = data);
      
    this.userService.userInfoSubject.
      subscribe(data =>{
          this.firstName = data.FirstName;
          this.roleId = data.RoleId;
        }
      );

    this.userService.getUserUsingSubject();

    this.GetAllUsers()
  }
  GetUserUsingSubject(){
    this.userService.getUserUsingSubject(); 
  }

  UpdateUserUserSubject(){
    this.userService.updateUserUsingSubject();
  }

  GetAllUsers(){
    this.userService.getAllUsers(this.userId)
    .subscribe(
      data => {
      this.userList = data
    }
    );
  }
}
