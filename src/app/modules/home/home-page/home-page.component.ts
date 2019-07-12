import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';
import { MenuItem } from '../../../shared/menu/menu.component';

@Component({
  selector: 'lab-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  menu: MenuItem[];

  constructor(
    private router: Router,
    private homeService: HomeService
  ) {}

  ngOnInit() {
    this.menu = this.homeService.getMenu();
  }

  navigate(menuItem: MenuItem): void {
    this.router.navigate([menuItem.url]);
    console.log('HomePage: navigate to ', menuItem.url);
  }
}
