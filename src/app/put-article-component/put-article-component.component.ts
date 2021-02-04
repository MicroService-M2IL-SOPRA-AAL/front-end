import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-put-article-component',
  templateUrl: './put-article-component.component.html',
  styleUrls: ['./put-article-component.component.css']
})
export class PutArticleComponentComponent implements OnInit {

  constructor(private http: HttpClient) { }
  private BaseUri = 'localhost:8892';
  public articles$;
  ngOnInit(): void {
    this.articles$ = this.http.put(`${this.BaseUri}/Articles/1`, {id: 1, nom: 'new Name', prix: 123, prixAchat: 321});
  }

}
