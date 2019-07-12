import { Component, OnInit } from '@angular/core';
import { PostsApiService } from '../../../core/communication/posts/posts-api.service';
import { Post } from '../../../core/communication/posts/entity/post';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'lab-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  posts: Observable<Post[]>;

  constructor(
    private router: Router,
    private postsApiService: PostsApiService
  ) { }

  ngOnInit() {
    this.posts = this.postsApiService.$getList();
  }

  navigateTo(post: Post): void {
    this.router.navigate(['post', post.id]);
  }
}
