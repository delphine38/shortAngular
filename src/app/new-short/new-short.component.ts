import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-short',
  templateUrl: './new-short.component.html',
  styleUrls: ['./new-short.component.css']
})
export class NewShortComponent implements OnInit {

  createShort(nom:string, taille:string, couleur:string){
    this.httpClient.post('http://localhost:8000/short/create', {
      name: nom,
      taille: taille,
      couleur: couleur
    }).subscribe(data => {
      console.log(data);
      this.router.navigate(['boutique'])
    })

  }

  constructor(private  httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

}
