import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { UserInfo } from '../model/UserInfo';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http : HttpClient) { }

  getUser() : Observable<UserInfo>{
    const url = 'http://localhost/api/student/getuser';
    return this.http.get<UserInfo>(url);
  }

  updateUser() : Observable<UserInfo>{
    const url = 'http://localhost/api/student/updateuser';
    return this.http.put<UserInfo>(url, 'something')
  }
}
