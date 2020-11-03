import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CatalogueProductsComponent } from './catalogue-products/catalogue-products.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegistryComponent } from './registry/registry.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalMessageComponent } from './modal-message/modal-message.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CatalogueProductsComponent,
    CartComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegistryComponent,
    InputIntegerComponent,
    ModalMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }