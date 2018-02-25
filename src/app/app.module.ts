import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ProductService } from "./product/products.service";
import { ProductsComponent } from "./productComponent/products.component";

import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from "./header/header.component";
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CartService } from "./cart/cart.service";
import { MoreDetailsComponent } from "./productComponent/more-details/more-details.component";
import { ContactUsComponent } from "./ContactUs/contactUs.component";

import { RouterModule } from '@angular/router';
import { RegisterProductComponent } from "./add-new-product/add-new-product.component";
import { ProductPageComponent } from "./product-page/product-page.component";
import { BackGroundImageComponent } from './back-ground-image/back-ground-image.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderComponent,
    ShoppingCartComponent,
    ContactUsComponent,
    HomePageComponent,
    RegisterProductComponent,
    ProductPageComponent,
    MoreDetailsComponent,
    BackGroundImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomePageComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'add-new-product', component: RegisterProductComponent },
      { path: 'product-page', component: ProductPageComponent }
    ])
  ],
  providers: [ProductService, CartService],
  bootstrap: [AppComponent]

})
export class AppModule { }
