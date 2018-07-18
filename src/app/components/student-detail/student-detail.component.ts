import { Component, OnInit } from '@angular/core';
//import { observable } from "rxjs";
import { StudentService } from "../../services/student.service";

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  constructor(private studentService : StudentService) { }

  message : string;
  ngOnInit() {
    this.studentService.getUser().subscribe(
      serviceData => this.message = serviceData.FirstName
    );
  }

  UpdateUser() {
    this.studentService.updateUser().subscribe(
      serviceData => this.message = serviceData.FirstName
    );
  }

}
