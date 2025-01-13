import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiURL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiURL}/posts`);
  }

  getComments(postId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiURL}/posts/${postId}/comments`);
  }

  createPost(post: any): Observable<any> {
    return this.http.post(`${this.apiURL}/posts`, post);
  }

  updatePost(postId: number, post: any): Observable<any> {
    return this.http.put(`${this.apiURL}/posts/${postId}`, post);
  }

  deletePost(postId: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/posts/${postId}`);
  }
}

