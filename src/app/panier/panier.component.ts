import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LivreurshopService} from '../livreurshop.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  panier:any = [];

  calculeLeTotalEtDonneLeMoi(){

    let  total = 0

    this.panier.forEach((short:any)=>{
      total += short.price
    })

    return total
  }


  enleveDuPanier(ceShort:any){
    this.panier.splice( this.panier.indexOf(ceShort), 1)
  }


  constructor(private livreurshop : LivreurshopService) {
  }

  ngOnInit(): void {

    this.panier = this.livreurshop.donne();
  }

}
