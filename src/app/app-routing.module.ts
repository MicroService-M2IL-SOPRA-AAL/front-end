import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListeArticlesComponent} from './listeArticles/listeArticles.component';
import {OneArticleComponent} from './one-article/one-article.component';
import {AdminArticlesComponentComponent} from './admin-articles-component/admin-articles-component.component';
import {PostArticleComponentComponent} from './post-article-component/post-article-component.component';
import {DeleteArticleComponentComponent} from './delete-article-component/delete-article-component.component';
import {TriArticlesComponentComponent} from './tri-articles-component/tri-articles-component.component';
import {PutArticleComponentComponent} from './put-article-component/put-article-component.component';
import {AppComponent} from './app.component';
import {GetCommandesComponent} from "./get-commandes/get-commandes.component";
import {PostCommandesComponent} from "./post-commandes/post-commandes.component";
import {GetOneCommandeComponent} from "./get-one-commande/get-one-commande.component";
import {PostSuiviComponent} from "./post-suivi/post-suivi.component";
import {GetEtatSuiviComponent} from "./get-etat-suivi/get-etat-suivi.component";
import {GetSuiviComponent} from "./get-suivi/get-suivi.component";


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'Articles', component: ListeArticlesComponent },
  { path: 'Article/:id', component: OneArticleComponent },
  { path: 'put/Article/:id', component: PutArticleComponentComponent },
  { path: 'post/Article/:id', component: PostArticleComponentComponent },
  { path: 'delete/Article/:id', component: DeleteArticleComponentComponent },
  { path: 'Articles/AdminArticles', component: AdminArticlesComponentComponent },
  { path: 'Articles/TriArticles', component: TriArticlesComponentComponent },

  { path: 'Commandes', component: GetCommandesComponent },
  { path: 'post/Commandes', component: PostCommandesComponent },
  { path: 'Commandes/:id', component: GetOneCommandeComponent },


  { path: 'Suivi', component: GetSuiviComponent },
  { path: 'post/Suivi', component: PostSuiviComponent },
  { path: 'Suivi/:id/etat', component: GetEtatSuiviComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
