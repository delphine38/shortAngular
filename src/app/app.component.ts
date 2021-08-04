import { Component } from '@angular/core';
import {LivreurshopService} from './livreurshop.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'short';


  combienDeShorts(){
    return this.livreurshop.donne().length;
  }

  constructor(private livreurshop: LivreurshopService) {
  }

}
