import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShopComponent } from './shop.component';
import { SectionsComponent, ProductsComponent } from './components';



export const routes: Routes = [
  {
    path: 'shop',
    component: ShopComponent,
    children: [
      { path: ':sectionID', component: ProductsComponent },
      { path: '', component: SectionsComponent },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class ShopRoutingModule { }
