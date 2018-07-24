import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from '../../../node_modules/rxjs';
import { UserInfo } from '../model/UserInfo';
import { map } from '../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http : HttpClient) { }

  Authentication(userName : string, password : string) : Observable<string>{
    const url = 'http://localhost/api/token/get?loginId=' + userName + '&password=' + password;
    return this.http.get<string>(url);
  }
}
