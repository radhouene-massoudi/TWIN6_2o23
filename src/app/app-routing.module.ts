import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddProductComponent } from './produit/add-product/add-product.component';
import { RdetailProductComponent } from './produit/rdetail-product/rdetail-product.component';
import { RemoveProductComponent } from './produit/remove-product/remove-product.component';
import { ShowProductComponent } from './produit/show-product/show-product.component';
import { UpdateproductComponent } from './produit/updateproduct/updateproduct.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { AddUserssComponent } from './users/add-userss/add-userss.component';
import { DeleteComponent } from './users/delete/delete.component';
import { FectUserssComponent } from './users/fect-userss/fect-userss.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';

const routes: Routes = [
  //{path:'', redirectTo:'reactive',pathMatch:'full'},
  {path:'userss',component:FectUserssComponent},
  {path:'adduserss',component:AddUserssComponent},
  {path:'updateuserss/:id',component:UpdateUserComponent},
  {path:'remove/:id',component:DeleteComponent},

  {path:'login',component:LoginComponent},
  {path:'reactive',component:ReactiveformComponent},
  {path:'addProduct',component:AddProductComponent},
  {path:'form',component:FormComponent},
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
