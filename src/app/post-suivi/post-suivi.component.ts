import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-post-suivi',
  templateUrl: './post-suivi.component.html',
  styleUrls: ['./post-suivi.component.css']
})
export class PostSuiviComponent implements OnInit {

  constructor(private http: HttpClient) { }
  private BaseUri = 'localhost:8892';
  public suivi$;
  ngOnInit(): void {
    this.suivi$ = this.http.post(`${this.BaseUri}/Suivi`, {id: 12, etat: 'Expédiée'});
  }

}
