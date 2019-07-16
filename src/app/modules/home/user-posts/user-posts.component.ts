import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, map, switchMap, tap } from 'rxjs/operators';
import { PostsApiService } from '../../../core/communication/posts/posts-api.service';
import { Post } from '../../../core/communication/posts/entity/post';

export interface UserPostsForm {
  user: string;
}

@Component({
  selector: 'lab-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {

  form: FormGroup;
  posts: Post[];

  constructor(
    private formBuilder: FormBuilder,
    private apiService: PostsApiService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      user: ['1', [Validators.required, Validators.maxLength(8)]]
    });

    // this.form.valueChanges.pipe(
    //   tap(console.log),
    //   debounceTime(500),
    //   map((form: UserPostsForm) => form.user),
    //   switchMap((userId: string) => this.apiService.$getByUser(userId)),
    // ).subscribe((posts: Post[]) => {
    //   console.log(posts);
    //   this.posts = posts;
    // });
  }

  submit(): void {
    const { user } = this.form.value as UserPostsForm;
    this.apiService.$getByUser(user)
      .subscribe((posts: Post[]) => {
          console.log(posts);
          this.posts = posts;
      });
  }

  reset(): void {
    this.form.reset({
      user: '1'
    });
  }
}
