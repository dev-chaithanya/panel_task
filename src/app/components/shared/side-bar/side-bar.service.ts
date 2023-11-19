import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SideBarService {

  private isOpenSubject = new BehaviorSubject<boolean>(false);
  isOpen$ = this.isOpenSubject.asObservable();

  toggle() {
    
    this.isOpenSubject.next(!this.isOpenSubject.value);
    console.log('SidebarService - isOpen:', this.isOpenSubject.value);
    
  }
  constructor() { }
}
