import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LivreurshopService {

  sac:any = [];

  donne(){
    return this.sac;
  }


  prends(ca:any){
    this.sac = ca;
  }

  constructor() { }
}
