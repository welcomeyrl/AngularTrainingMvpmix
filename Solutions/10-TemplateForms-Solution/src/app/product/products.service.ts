import { ApiService } from '../core/services/api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Product } from './product.model';

import 'rxjs/add/operator/map';

@Injectable()
export class ProductsService {
  constructor(private apiService: ApiService) {}

  getAll(): Observable<Array<Product>> {
    return this.apiService.get<Array<Product>>('/api/products')
      .map((products: Array<Product>) => {
        return products.sort((a, b) => {
          const aLowered = a.name.toLowerCase();
          const bLowered = b.name.toLowerCase();

          if (aLowered < bLowered) {
            return -1;
          }
          if (aLowered > bLowered) {
            return 1;
          }

          // names must be equal
          return 0;
        });
      });
  }

  get(productId: number): Observable<Product> {
    return this.apiService.get<Product>(`/api/products/${productId}`);
  }

  save(product: Product): Observable<void> {
    if (!product.id) {
      // Add a new product
      return this.apiService.post('/api/Products', product);
    } else {
      // Update current product
      return this.apiService.put(`/api/Products/${product.id}`, product);
    }
  }
}
