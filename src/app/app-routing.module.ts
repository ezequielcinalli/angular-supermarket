import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { CatalogueProductsComponent } from './catalogue-products/catalogue-products.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistryComponent } from './registry/registry.component';

const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch:'full'},
  {path: 'inicio', component: HomeComponent},
  {path: 'nosotros', component: AboutComponent},
  {path: 'productos', component: CatalogueProductsComponent},
  {path: 'carrito', component: CartComponent},
  {path: 'registro', component: RegistryComponent},
  {path: 'ingreso', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
