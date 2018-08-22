import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ArticleComponent } from './list/article/article.component';
import { HeaderComponent } from './list/header/header.component';
import { DetailComponent } from './list/detail/detail.component';
import { AdminArticleComponent } from './admin/article/article.component';

import { ArticlesService } from './services/articles.service';
import { TruncatePipe } from './pipes/truncate.pipe';

const appRoutes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'edit/:id', component: AdminArticleComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ListComponent,
    HeaderComponent,
    DetailComponent,
    AdminArticleComponent,
    TruncatePipe

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [
    ArticlesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
