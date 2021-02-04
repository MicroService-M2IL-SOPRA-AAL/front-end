import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-get-commandes',
  templateUrl: './get-commandes.component.html',
  styleUrls: ['./get-commandes.component.css']
})
export class GetCommandesComponent implements OnInit {

  constructor(private http: HttpClient) { }
  private BaseUri = 'localhost:8892';
  public commandes$;
  ngOnInit(): void {
    this.commandes$ = this.http.get(`${this.BaseUri}/Commandes`);
  }

}
