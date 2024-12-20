import { Component, OnInit } from '@angular/core';
import { Category } from '../interfaces/category';
import { NewsService } from '../services/news.service';
import { LoginService } from '../services/login.service';
import { Article } from '../interfaces/article';
import { log } from 'console';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent {

  activeTab: Category = Category.All; // active tab by default;
  tabs : any = Object.values(Category); // list of tabs
  searchText: string = '';

  loginSrv: LoginService;
  newsSvr : NewsService;

  constructor(private newsSrv : NewsService, loginSrv : LoginService){
    if (!loginSrv.isLogged()){
      newsSrv.setAnonymousApiKey();
    }
    this.loginSrv = loginSrv;
    this.newsSvr = newsSrv;
  }
  
  setActiveTab(tab: Category) {
    this.activeTab = tab; // update the active onglet in the menu
  }

  delete(article : Article){
    const confirmed = window.confirm('Are you sure you want to delete '+ article.title +' ?');
    if (confirmed){
      this.newsSrv.deleteArticle(parseInt(article.id)).subscribe(
        (data: Article) => {
          const deletedArticle = data;
          console.log(deletedArticle);
        }
      );
      window.confirm(article.title +' have beeing deleted');
      this.newsSrv.loadArticles();
    }
   
  }
}
