import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddProductComponent } from './produit/add-product/add-product.component';
import { RdetailProductComponent } from './produit/rdetail-product/rdetail-product.component';
import { RemoveProductComponent } from './produit/remove-product/remove-product.component';
import { ShowProductComponent } from './produit/show-product/show-product.component';
import { UpdateproductComponent } from './produit/updateproduct/updateproduct.component';

const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},

  {path:'addProduct',component:AddProductComponent},
  
  {path:'update',component:UpdateproductComponent},
  {path:'product',component:ShowProductComponent,
children:[
  {path:'remove/:myid',component:RemoveProductComponent},
  {path:'detail/:id',component:RdetailProductComponent},
]
},
{path:'admin',loadChildren:()=>import('./admin/admin.module').then((m)=>{m.AdminModule})},
{path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
