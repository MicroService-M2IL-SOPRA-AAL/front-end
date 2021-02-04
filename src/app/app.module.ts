import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ListeArticlesComponent } from './listeArticles/listeArticles.component';
import { OneArticleComponent } from './one-article/one-article.component';
import { PutArticleComponentComponent } from './put-article-component/put-article-component.component';
import { PostArticleComponentComponent } from './post-article-component/post-article-component.component';
import { DeleteArticleComponentComponent } from './delete-article-component/delete-article-component.component';
import { AdminArticlesComponentComponent } from './admin-articles-component/admin-articles-component.component';
import { TriArticlesComponentComponent } from './tri-articles-component/tri-articles-component.component';
import { GetCommandesComponent } from './get-commandes/get-commandes.component';
import { PostCommandesComponent } from './post-commandes/post-commandes.component';
import { GetOneCommandeComponent } from './get-one-commande/get-one-commande.component';
import { GetSuiviComponent } from './get-suivi/get-suivi.component';
import { PostSuiviComponent } from './post-suivi/post-suivi.component';
import { GetEtatSuiviComponent } from './get-etat-suivi/get-etat-suivi.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeArticlesComponent,
    OneArticleComponent,
    PutArticleComponentComponent,
    PostArticleComponentComponent,
    DeleteArticleComponentComponent,
    AdminArticlesComponentComponent,
    TriArticlesComponentComponent,
    GetCommandesComponent,
    PostCommandesComponent,
    GetOneCommandeComponent,
    GetSuiviComponent,
    PostSuiviComponent,
    GetEtatSuiviComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
