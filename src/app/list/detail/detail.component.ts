import { OnInit, Component } from "@angular/core";
import { ArticlesService } from '../../services/articles.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';


@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html'
})

export class DetailComponent implements OnInit {
    public detail: any;
    public id: string;

    public title: string;
    public content: string;
    public comments: any;

    constructor(private articlesService: ArticlesService, private route: ActivatedRoute, public router: Router) { }

    ngOnInit() {
        this.id = this.route.snapshot.params.id;
        console.log('id', this.id);
        this.articlesService.getArticleById(this.id).subscribe((response) => {
            this.detail = response;
            console.log('detail', this.detail);
        }), (error) => {
            console.log('error', error);
            return error;
        };

    }

    public deleteArticle() {
        console.log(this.detail.id);
        this.articlesService.deleteArticleById(this.detail.id).subscribe((response) => {
          this.router.navigate(['/list']);
         }), (error) => {
            console.log('error', error);
            return error;
        };
    }
}