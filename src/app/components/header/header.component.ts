import { Component, OnInit } from '@angular/core';
import { StudentService } from "../../services/student.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  studentName : string;
  constructor(private studentService : StudentService) { }

  ngOnInit() {
    this.studentService.getUser().subscribe(
      serviceData => this.studentName = serviceData.FirstName + ' ' + serviceData.LastName
    );
  }

}
