import { Injectable } from '@angular/core';

import { MenuItem } from '../../shared/menu/menu.component';

@Injectable()
export class HomeService {

  constructor() { }
  getMenu(): MenuItem[] {
    return [
      {
        label: 'Home',
        url: ''
      },
      {
        label: 'Articles',
        url: 'articles'
      },
      {
        label: 'About',
        url: 'about'
      },
      {
        label: 'Contacts',
        url: 'contacts'
      }
    ];
  }
}
