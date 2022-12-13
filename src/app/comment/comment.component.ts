import { Component, Input } from '@angular/core';
import { PostComment } from '../interfaces';

@Component({
  selector: 'post-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input() postComment: PostComment | undefined
}
