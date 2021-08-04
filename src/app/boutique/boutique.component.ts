import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {LivreurshopService} from '../livreurshop.service';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent implements OnInit {


short:any = [];
panier:any = [];

//ici methode pour ajouter des articles au panier
  ajouteLesArticlesDansLePanier(short: any){
    this.panier.push(short);
    this.livreurShop.prends(this.panier);

    console.log(this.panier);
  }


  constructor(private httpClient: HttpClient, private  livreurShop : LivreurshopService) {
    this.getShortsFromApi();
  }

  ngOnInit(){
  }

  lesShorts: any = [];

  getShortsFromApi(): void {
    this.httpClient.get('http://localhost:8000/api/shorts')
      .subscribe(data => {

      this.lesShorts = data;
    });
  }

  deleteShort(idDeShort:number): void {
    this.httpClient.delete('http://localhost:8000/api/short/delete/'+idDeShort).subscribe(
      data => {
        console.log(data);
        this.getShortsFromApi();
      });
  }





}
