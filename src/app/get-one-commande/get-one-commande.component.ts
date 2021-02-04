import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-get-one-commande',
  templateUrl: './get-one-commande.component.html',
  styleUrls: ['./get-one-commande.component.css']
})
export class GetOneCommandeComponent implements OnInit {

  constructor(private http: HttpClient) { }
  private BaseUri = 'localhost:8892';
  public commandes$;
  ngOnInit(): void {
    this.commandes$ = this.http.get(`${this.BaseUri}/Commandes/1`);
  }

}
