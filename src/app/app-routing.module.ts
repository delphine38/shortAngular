import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BoutiqueComponent} from './boutique/boutique.component';
import {ShortComponent} from './short/short.component';
import {NewShortComponent} from './new-short/new-short.component';
import {PanierComponent} from './panier/panier.component';

const routes: Routes = [
  {path: 'boutique', component: BoutiqueComponent},
  {path: 'short', component: ShortComponent},
  {path: 'new-short', component: NewShortComponent},
  {path: 'panier', component: PanierComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
