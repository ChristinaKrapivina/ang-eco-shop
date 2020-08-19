import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ContainerComponent } from './core/components';


const routes: Routes = [
  {
    path: 'home', component: ContainerComponent, children: [
      { path: '', loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule) }
    ]
  },
  {
    path: 'shop', component: ContainerComponent, children: [
      { path: '', loadChildren: () => import('./pages/shop/shop.module').then((m) => m.ShopModule) }
    ]
  },
  { path: 'signin', component: LoginComponent },
  { path: 'signup', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
