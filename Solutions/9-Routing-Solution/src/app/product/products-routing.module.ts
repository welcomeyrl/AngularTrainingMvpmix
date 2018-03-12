import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from './details/product-details.component';
import { ProductListComponent } from './list/product-list.component';

const routes: Routes = [
  {
    path: 'Products',
    component: ProductsComponent,
    children: [
      { path: 'Details/:id', component: ProductDetailsComponent },
      { path: 'Details', component: ProductDetailsComponent },
      { path: '', component: ProductListComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
