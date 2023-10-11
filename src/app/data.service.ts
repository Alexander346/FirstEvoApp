import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getPost(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getComments(): Observable<any> {
    let params = new HttpParams().set('postId', '1');
    return this.http.get('https://jsonplaceholder.typicode.com/comments', { params });
  }

  createPost(): Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', {});
  }

  getWithErrorHandling(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
  }

  getWithHeaders(): Observable<string> {
    let headers = new HttpHeaders().set('X-Test', '1');
    return this.http.get('https://jsonplaceholder.typicode.com/posts', { headers, responseType: 'text' });
  }

  deletePost(): Observable<any> {
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/1');
  }

  getDataById(id: number): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
