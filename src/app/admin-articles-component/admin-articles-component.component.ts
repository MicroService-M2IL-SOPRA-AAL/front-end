import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-admin-articles-component',
  templateUrl: './admin-articles-component.component.html',
  styleUrls: ['./admin-articles-component.component.css']
})
export class AdminArticlesComponentComponent implements OnInit {

  constructor(private http: HttpClient) { }
  private BaseUri = 'localhost:8892';
  public articles$;
  ngOnInit(): void {
    this.articles$ = this.http.get(`${this.BaseUri}/Articles/AdminArticles`);
  }

}
