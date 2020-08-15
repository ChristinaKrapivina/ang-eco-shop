import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SectionsComponent,
  SectionComponent,
  ProductsComponent,
  ProductComponent
} from 'src/app/pages/shop/components';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShopComponent } from './shop.component';
import { ShopRoutingModule } from './shop-routing.module';

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
    SharedModule,
    ShopRoutingModule,
  ],
  exports: [ ShopComponent ]
})
export class ShopModule { }
