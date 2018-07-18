import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo } from './UserInfo';

@Injectable({
  providedIn: 'root'
})
export class ObserverTestService {

  constructor(private http: HttpClient) { }

  getDataFromService() : Observable<UserInfo> {
    const url = 'http://localhost/api/values/GetGenericActionResultUsingType';
    return this.http.get<UserInfo>(url);
  }
}
