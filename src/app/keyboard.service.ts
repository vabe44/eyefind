import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class KeyboardService {

//   private keyboardOpenSubject: Subject<boolean>;
  private keyboardOpenSubject: Subject<string>;

  constructor() {
      this.keyboardOpenSubject = new Subject<string>();
  }

  toggleKeyboard(opening: string): void {
      this.keyboardOpenSubject.next(opening);
  }

  onKeyboardToggle(): Observable<string> {
      return this.keyboardOpenSubject;
  }

}
