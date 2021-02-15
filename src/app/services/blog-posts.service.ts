import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBlogPost} from '../models/IBlogPost';

@Injectable({
  providedIn: 'root'
})
export class BlogPostsService {

  // url = `http://localhost:8080/blogposts`;
  url = `http://46.101.99.64:8080/blogposts`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getProducts(): Observable<IBlogPost[]> {
    return this.httpClient.get<IBlogPost[]>(this.url);
  }

  constructor(private httpClient: HttpClient) {
  }

  getProductById(id: number): Observable<IBlogPost> {
    return this.httpClient.get<IBlogPost>(this.url + '/' + id);
  }
}
