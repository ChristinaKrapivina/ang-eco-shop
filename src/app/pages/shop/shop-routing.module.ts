import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShopComponent } from './shop.component';
import { SectionsComponent, ProductsComponent } from './components';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';


export const routes: Routes = [
  {
    path: 'shop',
    component: ShopComponent,
    canActivate: [AuthGuard],
    children: [
      { path: ':sectionName', component: ProductsComponent},
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
