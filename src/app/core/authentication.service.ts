import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
// import { Observable, Subject } from '../../../node_modules/rxjs';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private tokenValue: string;
  private tokenKey: string;
  isLoggedin: boolean;

  constructor() {
    this.tokenValue = sessionStorage.getItem(this.tokenKey);
    this.setAuthenticatation();
   }

   login(token: string): Observable<boolean> {
     sessionStorage.setItem(this.tokenKey, token);
    //  this.tokenValue = sessionStorage.getItem(this.tokenKey);
     this.setAuthenticatation();
     return of(this.isLoggedin);
   }

   private setAuthenticatation() {
     const jwtHelperService = new JwtHelperService();
     this.tokenValue = sessionStorage.getItem(this.tokenKey);
     this.isLoggedin =  !jwtHelperService.isTokenExpired(this.tokenValue, 0);
   }

   logout(): Observable<boolean> {
     sessionStorage.removeItem(this.tokenKey);
    //  this.tokenValue = sessionStorage.getItem(this.tokenKey);
     this.setAuthenticatation();
     return of(this.isLoggedin);
   }
}
