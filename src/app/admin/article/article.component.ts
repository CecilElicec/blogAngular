import { Input, Component, OnInit } from "@angular/core";
import { ArticlesService } from "../../services/articles.service";
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
    selector: 'admin-article',
    templateUrl: './article.component.html'
})

export class AdminArticleComponent implements OnInit {
    @Input() article

    public id: string;
    public title: string;
    public content: string;

    public currentArticle: any;

    constructor(private articlesService: ArticlesService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.id = this.route.snapshot.params.id;
        this.articlesService.getArticleById(this.id).subscribe((response) => {            
            this.currentArticle = response;
            console.log('currentArticle', this.currentArticle);
            this.title = this.currentArticle.title;
            this.content =  this.currentArticle.content;
        }), (error) => {
            console.log('error', error);
            return error;
        };
    }

    public goUpdate() {
        if(this.title && this.content) {}
        const body = {
            title: this.title,
            content: this.content
        };
        this.articlesService.updateArticle(this.id,body);
    }

}