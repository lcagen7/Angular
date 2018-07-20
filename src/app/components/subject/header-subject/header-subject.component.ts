import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../services/user.service";

@Component({
  selector: 'app-header-subject',
  templateUrl: './header-subject.component.html',
  styleUrls: ['./header-subject.component.css']
})
export class HeaderSubjectComponent implements OnInit {

  userName : string;

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.userInfoSubject
      .subscribe(data => this.userName = data.FirstName + " " + data.LastName);
  }

}
