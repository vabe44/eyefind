import { KeyboardService } from './../keyboard.service';
import { Component, OnInit, transition } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {

  public active = false;
  public activeInput: string;

  constructor(private keyboardService: KeyboardService) { }

  ngOnInit() {
    this.keyboardService.onKeyboardToggle().subscribe(
      (inputId) => {
        this.activeInput = inputId;
        this.active = true;
      }
    );
  }

  onRightClick() {
    this.active = !this.active;
    return false;
  }

  simulateKey(key: string) {
    const input = document.getElementById(this.activeInput) as HTMLInputElement;

    if (key === 'backspace') {
      input.value = input.value.slice(0, -1);
    } else if (key === 'enter') {
      console.log('enter pressed');
    } else {
      input.value += key;
    }

  }

}
