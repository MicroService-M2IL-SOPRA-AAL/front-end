import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-post-article-component',
  templateUrl: './post-article-component.component.html',
  styleUrls: ['./post-article-component.component.css']
})
export class PostArticleComponentComponent implements OnInit {

  constructor(private http: HttpClient) { }
  private BaseUri = 'localhost:8892';
  public articles$;
  ngOnInit(): void {
    this.articles$ = this.http.put(`${this.BaseUri}/Articles/1`, {id: 1, nom: 'new Name Post', prix: 456, prixAchat: 789});
  }

}
