import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-post-commandes',
  templateUrl: './post-commandes.component.html',
  styleUrls: ['./post-commandes.component.css']
})
export class PostCommandesComponent implements OnInit {

  constructor(private http: HttpClient) { }
  private BaseUri = 'localhost:8892';
  public commandes$;
  ngOnInit(): void {
    this.commandes$ = this.http.post(`${this.BaseUri}/Commandes`, {
      id: 12,
      idProduit: 1,
      prix: 456,
      quantiteProduit: 2,
      dateCommande: new Date()
    });
  }

}
