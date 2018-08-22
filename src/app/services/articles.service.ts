import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ArticlesService {
    // public articles = [
    //     {
    //         'title': 'Nigel is love', 'description': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium', 'comments': [
    //             { 'username': 'Alice', 'comment': 'Hello' },
    //             { 'username': 'Nigel', 'comment': 'Hiii !' }
    //         ]
    //     },
    //     { 'title': 'Hello John Doe', 'description': 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit', 'comments': [{ 'username': 'Afuei', 'comment': 'UHj fnoenfoe' }] },
    //     { 'title': 'Hello John Doe', 'description': 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit', 'comments': [] }
    // ];
    constructor(private http: HttpClient) { }

    public getArticles() {
        return this.http.get('http://localhost:8080/rest/articles');
    }

    public getArticleById(id) {
        return this.http.get(`http://localhost:8080/rest/articles/${id}`);
    }

    public updateArticle(data) {
        return this.http.put(`http://localhost:8080/rest/articles/${data.id}`, data);
    }
}