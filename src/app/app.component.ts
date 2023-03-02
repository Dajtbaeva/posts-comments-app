import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
// import { IComment } from './models/comment';
import { IPost } from './models/post';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'posts-app';
  userId = '';
  posts: IPost[] = [];
  // posts$: Observable<IPost[]>;
  // stream: type<generic>

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  showPosts() {
    // this.posts$ = this.postsService.getPosts(this.userId);
    this.postsService.getPosts(this.userId).subscribe((data) => {
      this.posts = data;
    });
  }
}
