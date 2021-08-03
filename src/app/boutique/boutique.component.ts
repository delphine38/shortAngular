import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent implements OnInit {

  constructor(private httpClient: HttpClient) {
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
