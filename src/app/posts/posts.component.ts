import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post, User, PostComment } from "../interfaces";
import { PostService } from "../post.service";

@Component({
	selector: 'posts',
	templateUrl: './posts.component.html',
	styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
	title = 'posts'
	
	posts: Post[] = []
	users: User[] = []
	postComments: PostComment[] = [] 
	
	constructor(private http: HttpClient, private postService: PostService) {
		
	}
	
	getPosts() {
		this.postService.getPosts().subscribe((res) => {
			this.posts = res
		})
	}

	getUsers() {
		this.postService.getUsers().subscribe((res) => {
			this.users = res
		})
	}

	getComments() {
		this.postService.getComments().subscribe((res) => {
			this.postComments = res
		})
	}
	
	ngOnInit() {
		this.getPosts()
		this.getUsers()
		this.getComments()
	}

	getNumOfComments(postId: number) {
		return this.postComments.filter(postComment => postComment.postId === postId).length
	}

	getUserFromId(id: number) {
		return this.postService.getUserFromId(id, this.users)
	}
}