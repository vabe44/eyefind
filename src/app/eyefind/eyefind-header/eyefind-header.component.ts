import { Component, OnInit } from '@angular/core';
import { KeyboardService } from '../../keyboard.service';

@Component({
  selector: 'app-eyefind-header',
  templateUrl: './eyefind-header.component.html',
  styleUrls: ['./eyefind-header.component.css']
})
export class EyefindHeaderComponent implements OnInit {

  private weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  public weekday: string;

  constructor(private keyboardService: KeyboardService) { }

  ngOnInit() {
    this.weekday = this.weekdays[new Date(Date.now()).getDay()];
  }

  onKeyboardOpen() {
    this.keyboardService.toggleKeyboard(true);
  }


}
