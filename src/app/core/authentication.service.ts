import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
// import { Observable, Subject } from '../../../node_modules/rxjs';
import { of, Observable } from 'rxjs';
import { UserInfo } from '../model/UserInfo';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private tokenValue: string;
  private tokenKey: string;
  user: string;
  userInfo: UserInfo;

  constructor() {
    console.log('Auth Serive Constructor');
  }

   login(token: string) {
     sessionStorage.setItem(this.tokenKey, token);
   }

   public isAuthenticated(): boolean {
     const jwtHelperService = new JwtHelperService();
     this.tokenValue = sessionStorage.getItem(this.tokenKey);
     if (!jwtHelperService.isTokenExpired(this.tokenValue)) {
        if (jwtHelperService.decodeToken(this.tokenValue).FirstName.includes('Admin')) {
          this.user = 'admin';
        } else {
          this.user = 'user';
        }
        return true;
     }
     return false;
   }

   logout() {
     sessionStorage.removeItem(this.tokenKey);
   }
}
