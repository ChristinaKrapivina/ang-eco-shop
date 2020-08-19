import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShopComponent } from './shop.component';
import { SectionsComponent, ProductsComponent } from './components';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { ContainerComponent } from 'src/app/core/components';


export const routes: Routes = [
  {
    path: 'shop', component: ContainerComponent, canActivate: [AuthGuard], children: [
      { path: '', component: ShopComponent, children: [
        { path: ':sectionName', component: ProductsComponent},
        { path: '', component: SectionsComponent },
      ] }
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
