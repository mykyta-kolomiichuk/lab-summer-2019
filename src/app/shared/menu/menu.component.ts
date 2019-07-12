import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface MenuItem {
  label: string;
  url: string;
}

@Component({
  selector: 'lab-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Input()
  menu: MenuItem[];

  @Output()
  onNavigate: EventEmitter<MenuItem> = new EventEmitter();

  constructor() { }

  navigate(menuItem: MenuItem): void {
    this.onNavigate.emit(menuItem);
  }
}
