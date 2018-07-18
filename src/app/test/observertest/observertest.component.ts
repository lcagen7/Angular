import { Component, OnInit } from '@angular/core';
import { ObserverTestService } from '../observertest.service';
import { UserInfo } from '../UserInfo';

@Component({
  selector: 'app-observertest',
  templateUrl: './observertest.component.html',
  styleUrls: ['./observertest.component.css']
})
export class ObservertestComponent implements OnInit {

  userInfo: UserInfo;
  constructor(private observerTestService : ObserverTestService) { }

  ngOnInit() {
    this.observerTestService.getDataFromService().subscribe(
      data => this.userInfo = data
    );
  }

}
