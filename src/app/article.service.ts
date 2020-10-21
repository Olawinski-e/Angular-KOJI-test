import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticlesListe() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getArticle(id) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id);
  }
}
