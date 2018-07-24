import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material";
import { ModelDialogComponent } from "../../common/model-dialog/model-dialog.component";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../../services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName : string;
  password : string;
  token : string;

  constructor(public dialog : MatDialog,
    private router : Router,
    private authenticationService : AuthenticationService) { }

  ngOnInit() {
  }  
  
  Login(){
    
    this.authenticationService.Authentication(this.userName, this.password)
      .subscribe(
        successData => this.navigateToDashbord(successData),
        errorData => this.showError(errorData)
      );
  }

  navigateToDashbord(token : string){
    localStorage.setItem('token', token);
          this.router.navigate(["dashboard"]);
  }

  showError(message : string) : void {
      this.dialog.open(ModelDialogComponent, {
        data: message
      });
  } 
}
