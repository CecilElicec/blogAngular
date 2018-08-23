import { Component, OnInit } from "@angular/core";
import { ArticlesService } from '../services/articles.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html'
})

export class ListComponent implements OnInit {

    public articles: any;

    constructor(private articlesService: ArticlesService, private router: Router) { }

    ngOnInit() {
        this.articlesService.getArticles().subscribe((response)=> {
            console.log('res',response);
            this.articles = response;
        }), (error)=> {
            console.log('error',error);
            return error;
        };
     }

     public addArticle(){
        this.router.navigate([`/add`]);
     }

}