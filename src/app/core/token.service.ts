import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http: HttpClient) { }

  GetToken(userName: string, password: string): Observable<string> {
    const url = 'http://localhost/api/token/get?loginId=' + userName + '&password=' + password;
    return this.http.get<string>(url);
  }
}
