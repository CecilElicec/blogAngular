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
    public currentArticle: any;

    public success: boolean;

    constructor(private articlesService: ArticlesService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.id = this.route.snapshot.params.id;
        this.articlesService.getArticleById(this.id).subscribe((response) => {
            this.currentArticle = response;
            console.log('currentArticle', this.currentArticle);
        }), (error) => {
            console.log('error', error);
            return error;
        };
    }

    public goUpdate() {
        console.log(this.currentArticle.title);
        if(!this.currentArticle.title ||  !this.currentArticle.content){
            return this.success = false;
        }
        this.articlesService.updateArticle(this.currentArticle).subscribe((response) => {
            this.success = true;
            console.log('response', response);
        }), (error) => {
            console.log('error', error);
            return error;
        };;
    }

}