import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PostDto } from './entity/post.dto';
import { Post } from './entity/post';
import { map } from 'rxjs/operators';

@Injectable()
export class PostsApiService {

  constructor(
    private http: HttpClient
  ) {}

  $getList(): Observable<Post[]> {
    return this.http.get<PostDto[]>('https://jsonplaceholder.typicode.com/posts').pipe(
      map((response: PostDto[]) => this.mapList(response))
    );
  }

  $get(id: string): Observable<Post> {
    return this.http.get<PostDto>(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(
      map((response: PostDto) => this.mapToPost(response))
    );
  }

  $getByUser(id: string): Observable<Post[]> {
    const params = { userId: id };
    return this.http.get<PostDto[]>(`https://jsonplaceholder.typicode.com/posts`, { params }).pipe(
      map((response: PostDto[]) => this.mapList(response))
    );
  }

  private mapList(response: PostDto[]): Post[] {
    return response.map((item: PostDto) => this.mapToPost(item));
  }

  private mapToPost(item: PostDto): Post {
    return new Post(
      item.userId,
      item.id,
      item.title,
      item.body
    );
  }
}
