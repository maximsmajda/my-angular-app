import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post, PostComment, User } from '../interfaces';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})

export class PostDetailComponent implements OnInit{
  comments: PostComment[] = []
  post: Post | undefined
  users: User[] = []

  constructor(private http: HttpClient, private route: ActivatedRoute, private postService: PostService) {
  }

  ngOnInit() {
    this.getPost()
    this.getUsers()
    this.getComments()
  }

  getPost() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.postService.getPosts().subscribe((res) => {
      this.post = res.find((post) => {
        return post.id === id
      })
    })
  }

  getComments() {
    this.postService.getComments().subscribe(res => {
      const id = Number(this.route.snapshot.paramMap.get('id'));

			this.comments = res.filter((comment) => {
        return comment.postId === id
      })
    })
  }

  getUsers() {
    this.postService.getUsers().subscribe(res => {
      this.users = res
    })
  }

  getUserFromId(id: number) {
		return this.postService.getUserFromId(id, this.users)
	}
}
