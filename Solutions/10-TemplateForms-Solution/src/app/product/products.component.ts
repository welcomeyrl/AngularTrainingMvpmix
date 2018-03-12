import { Component } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  providers: [ProductsService]
})
export class ProductsComponent {}
