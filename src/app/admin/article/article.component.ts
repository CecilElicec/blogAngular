import { Input, Component, OnInit } from "@angular/core";
import { ArticlesService } from "../../services/articles.service";
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
    selector: 'admin-article',
    templateUrl: './article.component.html'
})

export class AdminArticleComponent implements OnInit {
    @Input() article

    public id: string;
    public currentArticle: any;
    public categories: any;
    public selectedCategories = [];

    public success: boolean;
    public create: boolean = false;

    constructor(private articlesService: ArticlesService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.getCategories();
        if (this.route.snapshot.params.id) {
            this.id = this.route.snapshot.params.id;
            this.articlesService.getArticleById(this.id).subscribe((response) => {
                this.currentArticle = response;
                console.log('currentArticle', this.currentArticle);
                if (this.currentArticle.categories) {
                    for (let i = 0; i < this.currentArticle.categories.length; i++) {
                        console.log('cat', this.currentArticle.categories[i]);
                        this.selectedCategories.push(this.currentArticle.categories[i]);
                    }
                    console.log('selected', this.selectedCategories);
                }

            }), (error) => {
                console.log('error', error);
                return error;
            };
        } else {
            this.create = true;
            this.currentArticle = {'title': '', 'content': ''};

        }
        console.log('create', this.create);
    }
    public getCategories() {
        this.articlesService.getCategories().subscribe((response) => {
            this.categories = response;
            console.log('categories', this.categories);
        }), (error) => {
            console.log('error', error);
            return error;
        };
    }
    public goUpdate() {
        console.log(this.currentArticle.title);
        if (!this.currentArticle.title || !this.currentArticle.content) {
            return this.success = false;
        }
        this.articlesService.updateArticle(this.currentArticle).subscribe((response) => {
            this.success = true;
            console.log('response', response);
        }), (error) => {
            console.log('error', error);
            return error;
        };
    }

    public goCreate() {
        const body = {
            'title': this.currentArticle.title,
            'content': this.currentArticle.content
        }
        this.articlesService.postArticle(body).subscribe((response) => {
            console.log('add',response);
            this.router.navigate([`/list`]);
        }), (error) => {
            console.log('error', error);
            return error;
        };
    }

}