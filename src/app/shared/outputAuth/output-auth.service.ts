import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
// import { Observable } from 'rxjs/Observable';
// import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class OutputAuthService {
  // Observable string sources
  private emitChangeSource = new Subject<any>();
  // Observable string streams
  changeEmitted$ = this.emitChangeSource.asObservable();
  

  constructor() { }

  
    // Service message commands
    emitChange(change: any) {
        this.emitChangeSource.next(change);
    }
}
