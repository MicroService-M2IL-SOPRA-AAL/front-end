import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-delete-article-component',
  templateUrl: './delete-article-component.component.html',
  styleUrls: ['./delete-article-component.component.css']
})
export class DeleteArticleComponentComponent implements OnInit {

  constructor(private http: HttpClient) { }
  private BaseUri = 'localhost:8892';
  public message;
  ngOnInit(): void {
    this.http.delete(`${this.BaseUri}/Articles/1`).subscribe((resp) => {
      this.message = resp;
    });
  }

}
