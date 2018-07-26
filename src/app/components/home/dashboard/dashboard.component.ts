import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { AuthenticationService } from '../../../core/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  user: string;

  constructor(private breakpointObserver: BreakpointObserver,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.user = this.authenticationService.userInfo.FirstName;
  }
}
