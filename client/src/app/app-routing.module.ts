import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './new-product//new-product.component';
import { UpdateProductListComponent } from './update-product-list//update-product-list.component';

const routes: Routes = [{path:'',component:ProductListComponent},{path:'add',component:NewProductComponent},{path:'edit/:p_id',component:UpdateProductListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
