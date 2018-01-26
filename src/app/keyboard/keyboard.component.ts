import { KeyboardService } from './../keyboard.service';
import { Component, OnInit, transition } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {

  public active = false;

  constructor(private keyboardService: KeyboardService) { }

  ngOnInit() {
    this.keyboardService.onKeyboardToggle().subscribe(
      (opening) => {
        if (opening) {
          this.active = true;
        } else {
          this.active = false;
        }
      }
    );
  }

  onRightClick() {
    console.log('RK');
    this.active = !this.active;
    return false;
  }

}
