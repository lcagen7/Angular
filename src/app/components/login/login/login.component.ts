import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { ModelDialogComponent } from '../../common/model-dialog/model-dialog.component';
import { Router } from '@angular/router';
import { TokenService } from '../../../core/token.service';
import { AuthenticationService } from '../../../core/authentication.service';
import { UserService } from '../../../services/user.service';
import { UserInfo } from '../../../model/UserInfo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  token: string;
  isAuthenticated: Boolean;
  userInfo: UserInfo;

  constructor(public dialog: MatDialog,
    private router: Router,
    private tokenService: TokenService,
    private authenticationService: AuthenticationService,
    private userService: UserService) { }

  ngOnInit() {
    if (this.authenticationService.isAuthenticated()) {
      this.router.navigate(['dashboard']);
    }
  }

  login() {
    this.tokenService.GetToken(this.userName, this.password)
      .subscribe(
        successData => this.authenticateAndRedirect(successData),
        errorData => this.showError(errorData)
      );
  }

  authenticateAndRedirect(token: string) {
    this.authenticationService.login(token);
    if (this.authenticationService.isAuthenticated()) {
      this.userService.getUser(this.authenticationService.user)
        .subscribe(serviceData => this.authenticationService.userInfo = serviceData);
      this.router.navigate(['dashboard']);
    }
  }

  showError(message: string): void {
      this.dialog.open(ModelDialogComponent, {
        data: message
      });
  }
}
