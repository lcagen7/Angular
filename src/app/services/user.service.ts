import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { observable, Observable, Subject } from 'rxjs';
import { UserInfo } from '../model/UserInfo';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userInfoSubject = new Subject<UserInfo>();

  constructor(private http : HttpClient) { }

  getUser() : Observable<UserInfo>{
    const url = 'http://localhost/api/user/getuser';
    return this.http.get<UserInfo>(url);
  }

  updateUser() : Observable<UserInfo>{
    const url = 'http://localhost/api/user/updateuser';
    return this.http.put<UserInfo>(url, 'something')
  }

  getUserUsingSubject(){
    const url = 'http://localhost/api/user/getuser';
    this.http.get<UserInfo>(url).subscribe(
      serviceData => this.userInfoSubject.next(serviceData)
    );
  }

  updateUserUsingSubject(){
    const url = 'http://localhost/api/user/updateuser';
    this.http.put<UserInfo>(url, 'something').
      pipe(map((returnData:UserInfo)=>
      {
        return{
          FirstName:'Name is updated by MAP -- ' + returnData.FirstName,
          LastName:returnData.LastName,
          LoginId:returnData.LoginId,
          RoleId:returnData.RoleId,
          UserId:returnData.UserId,
        }
      }
      )).
      subscribe(
      serviceData => this.userInfoSubject.next(serviceData)
    );
  }
}
