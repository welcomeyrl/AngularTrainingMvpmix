import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from './details/product-details.component';
import { ProductListComponent } from './list/product-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/models/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
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
