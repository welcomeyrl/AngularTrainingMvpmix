import { Injectable } from '@angular/core';
import { CartItem } from '../../shared/models/cart-item.model';

@Injectable()
export class CartService {
  private cart: Array<CartItem> = [];

  addProduct(productId: number) {
    const cartItem = this.cart.find((item: CartItem) => item.productId === productId);

    if (cartItem) {
      cartItem.quantity = cartItem.quantity + 1;
    } else {
      this.cart = this.cart.concat(<CartItem>{productId: productId, quantity: 1});
    }
  }

  getCartQuantity(): number {
    let totalItems: number = 0;
    this.cart.forEach((item: CartItem) => totalItems = totalItems + item.quantity);
    return totalItems;
  }
}
