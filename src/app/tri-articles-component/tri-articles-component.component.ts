import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-tri-articles-component',
  templateUrl: './tri-articles-component.component.html',
  styleUrls: ['./tri-articles-component.component.css']
})
export class TriArticlesComponentComponent implements OnInit {

  constructor(private http: HttpClient) { }
  private BaseUri = 'localhost:8892';
  public articles$;
  ngOnInit(): void {
    this.articles$ = this.http.get(`${this.BaseUri}/Articles/TriArticles`);
  }

}
