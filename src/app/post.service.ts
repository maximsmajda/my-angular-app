import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Post, PostComment, User } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postsUrl    = 'https://jsonplaceholder.typicode.com/posts'
  private usersUrl    = 'https://jsonplaceholder.typicode.com/users'
  private commentsUrl = 'https://jsonplaceholder.typicode.com/comments'

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl).pipe(
      catchError(this.handleError<Post[]>('getPosts', []))
    );
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl).pipe(
      catchError(this.handleError<User[]>('getUsers', []))
    );
  }

  getComments(): Observable<PostComment[]> {
    return this.http.get<PostComment[]>(this.commentsUrl).pipe(
      catchError(this.handleError<PostComment[]>('getComments', []))
    );
  }

  getUserFromId(id: number, users: User[]) {
		return (users.find((user) => user.id == id))?.name
	}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {      
      console.error(error);
      return of(result as T);
    };
  }
}
