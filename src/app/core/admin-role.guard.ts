import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminRoleGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService) {  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const expectedRole = next.data.expectedRole;

      if (this.authenticationService.isAuthenticated()) {
        if (this.authenticationService.userInfo.RoleId === expectedRole) {
          return true;
        }
      }
    return false;
  }
}
