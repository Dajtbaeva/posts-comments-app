import { Component, Input, OnInit } from '@angular/core';
import { IComment } from 'src/app/models/comment';
import { IPost } from 'src/app/models/post';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post: IPost;
  getComments = false;
  comments: IComment[] = [];

  constructor(private commentsService: CommentsService) {}
  ngOnInit(): void {
    this.commentsService.getComments(this.post.id).subscribe((data) => {
      this.comments = data;
    });
  }
}
