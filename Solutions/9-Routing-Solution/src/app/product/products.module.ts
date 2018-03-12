import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from './details/product-details.component';
import { ProductListComponent } from './list/product-list.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule
  ],
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
    ProductListComponent
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule {}
