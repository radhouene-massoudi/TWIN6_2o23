import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test1/test1.component';
import { AddProductComponent } from './produit/add-product/add-product.component';
import { UpdateproductComponent } from './produit/updateproduct/updateproduct.component';
import { RemoveProductComponent } from './produit/remove-product/remove-product.component';
import { RdetailProductComponent } from './produit/rdetail-product/rdetail-product.component';
import { ShowProductComponent } from './produit/show-product/show-product.component';
import { NavComponent } from './nav/nav.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { AdminModule } from './admin/admin.module';
import { PanierModule } from './panier/panier.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test1Component,
    AddProductComponent,
    UpdateproductComponent,
    RemoveProductComponent,
    RdetailProductComponent,
    ShowProductComponent,
    NavComponent,
    NotfoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AdminModule,
    PanierModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
