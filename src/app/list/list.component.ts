import { Component, OnInit } from "@angular/core";
import { ArticlesService } from '../services/articles.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html'
})

export class ListComponent implements OnInit {

    public articles: any;

    constructor(private articlesService: ArticlesService) { }

    ngOnInit() {
        this.articlesService.getArticles().subscribe((response)=> {
            console.log('res',response);
            this.articles = response;
        }), (error)=> {
            console.log('error',error);
            return error;
        };
     }

}