import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-get-suivi',
  templateUrl: './get-suivi.component.html',
  styleUrls: ['./get-suivi.component.css']
})
export class GetSuiviComponent implements OnInit {

  constructor(private http: HttpClient) { }
  private BaseUri = 'localhost:8892';
  public suivi$;
  ngOnInit(): void {
    this.suivi$ = this.http.get(`${this.BaseUri}/Suivi`);
  }

}
