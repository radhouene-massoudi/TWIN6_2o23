import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AddproductComponent } from './addproduct/addproduct.component';
import { FormComponent } from './form/form.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ServiceSSComponent } from './service-ss/service-ss.component';
import { C2Component } from './c2/c2.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersListComponent } from './users-list/users-list.component';
import { FectUserssComponent } from './users/fect-userss/fect-userss.component';
import { AddUserssComponent } from './users/add-userss/add-userss.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { DeleteComponent } from './users/delete/delete.component';
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
    LoginComponent,
    AddproductComponent,
    FormComponent,
    ReactiveformComponent,
    ServiceSSComponent,
    C2Component,
    UsersListComponent,
    FectUserssComponent,
    AddUserssComponent,
    UpdateUserComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AdminModule,
    PanierModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
