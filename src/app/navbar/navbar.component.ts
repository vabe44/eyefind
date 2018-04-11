import { KeyboardService } from './../keyboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private keyboardService: KeyboardService) { }

  ngOnInit() {
  }

  onKeyboardOpen($event) {
    this.keyboardService.toggleKeyboard($event.srcElement.id);
  }

}
