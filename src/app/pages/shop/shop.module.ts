import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {
  SectionsComponent,
  SectionComponent,
  ProductsComponent,
  ProductComponent
} from 'src/app/pages/shop/components';
import { ShopComponent } from './shop.component';

const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
  },
];

@NgModule({
  declarations: [
    ShopComponent,
    SectionsComponent,
    SectionComponent,
    ProductsComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [ ShopComponent ]
})
export class ShopModule { }
