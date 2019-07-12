import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../../../core/communication/posts/entity/post';
import { PostsApiService } from '../../../core/communication/posts/posts-api.service';

@Component({
  selector: 'lab-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  $post: Observable<Post>;

  constructor(
    private route: ActivatedRoute,
    private postsApiService: PostsApiService
  ) { }

  ngOnInit() {
    const { id } = this.route.snapshot.params;
    this.$post = this.postsApiService.$get(id);
  }

}
