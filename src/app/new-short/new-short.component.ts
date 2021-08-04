import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-short',
  templateUrl: './new-short.component.html',
  styleUrls: ['./new-short.component.css']
})
export class NewShortComponent implements OnInit {

  createShort(name: string, color: string, size: string, price: number) {
    this.httpClient.post('http://localhost:8000/api/short/create', {
      name: name,
      color: color,
      size :size,
      price: price
    }).subscribe(data => {console.log(data)
      this.router.navigate(['short'])})


  }

  constructor(private  httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

}
