import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PostsApiService } from './posts/posts-api.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    PostsApiService
  ]
})
export class CommunicationModule { }
