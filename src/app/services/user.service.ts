import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { observable, Observable, Subject } from 'rxjs';
import { UserInfo } from '../model/UserInfo';
import { map, filter } from 'rxjs/operators';
// import * as Rx from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // public userInfoSubject = new Rx.ReplaySubject<UserInfo>(2);
  public userInfoSubject = new Subject<UserInfo>();

  constructor(private http : HttpClient) { }

  getUser() : Observable<UserInfo>{
    const url = 'http://localhost/api/user/getuser';
    return this.http.get<UserInfo>(url)
    .pipe(
      filter(serviceData => serviceData.RoleId === 1)
    );
  }

  updateUser() : Observable<UserInfo>{
    const url = 'http://localhost/api/user/updateuser';

    let userInfo : UserInfo = {
      FirstName:'FName1Updated',
      LastName:'LName1Updated',
      LoginId:'FL1',
      RoleId:1,
      UserId:1
    };

    return this.http.put<UserInfo>(url, userInfo)
  }

  getUserUsingSubject(){
    const url = 'http://localhost/api/user/getuser';
    this.http.get<UserInfo>(url).subscribe(
      serviceData => this.userInfoSubject.next(serviceData)
    );
  }

  updateUserUsingSubject(){
    const url = 'http://localhost/api/user/updateuser';

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    let userInfo : UserInfo = {
      FirstName:'FName1Updated',
      LastName:'LName1Updated',
      LoginId:'FL1',
      RoleId:1,
      UserId:1
    }

    this.http.put<UserInfo>(url, userInfo, httpOptions).
      pipe(map((returnData:UserInfo)=>
      {
        return{
          FirstName:'Name is updated by MAP -- ' + returnData.FirstName,
          LastName:returnData.LastName,
          LoginId:returnData.LoginId,
          RoleId:returnData.RoleId * 2,
          UserId:returnData.UserId
        }
      }
      )).
      subscribe(
      serviceData => this.userInfoSubject.next(serviceData)
    );
  }

  getAllUsers(userId : number) : Observable<Array<UserInfo>>{
    const url = 'http://localhost/api/user/getallusers';
    return this.http.get<Array<UserInfo>>(url)
      .pipe(
        map(serviceData => serviceData.filter(singleServiceData => singleServiceData.UserId > userId)
      )
    )
  }
}
