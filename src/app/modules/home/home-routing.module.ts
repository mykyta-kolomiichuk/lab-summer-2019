import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsResolver } from './resolvers/contacts.resolver';
import { CanActivateAboutService } from './guards/can-activate-about.service';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: 'articles',
        redirectTo: '/',
        pathMatch: 'full'
      },
      {
        path: 'about',
        canActivate: [
          CanActivateAboutService
        ],
        component: AboutComponent
      },
      {
        path: 'post/:id',
        component: PostComponent
      },
      {
        path: 'contacts',
        resolve: {
          phones: ContactsResolver
        },
        component: ContactsComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [
    CanActivateAboutService,
    ContactsResolver
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
