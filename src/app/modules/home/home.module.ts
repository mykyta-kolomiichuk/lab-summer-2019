import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeService } from './home.service';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    HomePageComponent,
    AboutComponent,
    ContactsComponent
  ],
  providers: [
    HomeService
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule { }
