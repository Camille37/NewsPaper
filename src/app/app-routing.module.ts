import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleEditionComponent } from './article-edition/article-edition.component';

const routes: Routes = [
  { path: '', redirectTo: '/article-list', pathMatch: 'full' },
  { path: 'article-list', component: ArticleListComponent },
  { path: 'article-details', component: ArticleDetailsComponent }, 
  { path: 'article-edition/:id', component: ArticleEditionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
