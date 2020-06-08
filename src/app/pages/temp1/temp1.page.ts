import { Component, OnInit, ViewChild, Inject } from '@angular/core';

@Component({
  selector: 'app-temp1',
  templateUrl: './temp1.page.html',
  styleUrls: ['./temp1.page.scss'],
})
export class Temp1Page implements OnInit {
  tabIndex: number;
  constructor() { }
  ngOnInit() { }
  tabChange($event) {
    this.tabIndex = $event.index;
  }
}


