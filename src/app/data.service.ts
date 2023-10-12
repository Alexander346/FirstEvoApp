import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private Url = 'https://jsonplaceholder.typicode.com/posts/1';

    constructor(private http: HttpClient) {}

    fetchPosts(): Observable<any> {
        return this.http.get('https://jsonplaceholder.typicode.com/posts');
    }

    fetchComments(postId: number): Observable<any> {
        return this.http.get('https://jsonplaceholder.typicode.com/comments', { params: { postId: postId.toString() } });
    }

    createPost(): Observable<any> {
        return this.http.post('https://jsonplaceholder.typicode.com/posts', {});
    }

    getWithErrorHandling(): Observable<any> {
        return this.http.get('https://jsonplaceholder.typicode.com/post').pipe();
    }

    getWithHeaders(): Observable<any> {
        const headers = { 'X-Test': '1' };
        return this.http.get('https://jsonplaceholder.typicode.com/posts', { headers, responseType: 'text' });
    }

    deletePost(): Observable<any> {
        return this.http.delete('https://jsonplaceholder.typicode.com/posts/1');
    }
}
