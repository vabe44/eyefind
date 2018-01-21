import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eyefind-header',
  templateUrl: './eyefind-header.component.html',
  styleUrls: ['./eyefind-header.component.css']
})
export class EyefindHeaderComponent implements OnInit {

  private weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  public weekday: string;

  constructor() { }

  ngOnInit() {
    this.weekday = this.weekdays[new Date(Date.now()).getDay()];
  }

}
