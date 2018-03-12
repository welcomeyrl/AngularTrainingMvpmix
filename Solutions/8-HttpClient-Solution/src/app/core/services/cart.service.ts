import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { CartItem } from '../../shared/models/cart-item.model';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class CartService {
  private cartId: number = 1;

  constructor(private apiService: ApiService) {}

  addProduct(productId: number): Observable<void> {
    return this.apiService.put(`/api/cart/${this.cartId}/item`, {id: productId});
  }

  getCartQuantity(): Observable<number> {
    return this.apiService.get<Array<CartItem>>(`/api/cart/${this.cartId}/items`)
      .map((items: Array<CartItem>) => {
        let totalItems: number = 0;
        items.forEach((item: CartItem) => totalItems = totalItems + item.quantity);
        return totalItems;
      });
  }
}
