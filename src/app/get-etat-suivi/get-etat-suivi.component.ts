import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-get-etat-suivi',
  templateUrl: './get-etat-suivi.component.html',
  styleUrls: ['./get-etat-suivi.component.css']
})
export class GetEtatSuiviComponent implements OnInit {

  constructor(private http: HttpClient) { }
  private BaseUri = 'localhost:8892';
  public suivi$;
  ngOnInit(): void {
    this.suivi$ = this.http.get(`${this.BaseUri}/Suivis/1/etat`);
  }
}
