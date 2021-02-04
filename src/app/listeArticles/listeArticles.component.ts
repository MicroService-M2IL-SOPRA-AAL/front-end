import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-liste-articles',
  templateUrl: './listeArticles.component.html',
  styleUrls: ['./listeArticles.component.css']
})
export class ListeArticlesComponent implements OnInit {

  constructor(private http: HttpClient) { }
  private BaseUri = 'localhost:8892';
  public articles$;
  ngOnInit(): void {
    this.articles$ = this.http.get(`${this.BaseUri}/Articles`);
  }

}
