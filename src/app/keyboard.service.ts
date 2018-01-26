import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class KeyboardService {

  private keyboardOpenSubject: Subject<boolean>;

  constructor() {
      this.keyboardOpenSubject = new Subject<boolean>();
  }

  toggleKeyboard(opening: boolean): void {
      this.keyboardOpenSubject.next(opening);
  }

  onKeyboardToggle(): Observable<boolean> {
      return this.keyboardOpenSubject;
  }

}
