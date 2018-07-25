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

  message: string;
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Token', cols: 2, rows: 1 }
        ];
      }

      return [
        { title: 'Token', cols: 2, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.message = 'This is a message';
  }

  logout() {
    this.authenticationService.logout();
  }
}
