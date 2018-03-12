import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  products: Product[] = [
    <Product>{ id: 1, name: 'Twix', description: 'Left or Right?', price: 10.99 },
    <Product>{ id: 2, name: 'Snickers', description: 'Peanuts & Caramel', price: 1.99 },
    <Product>{ id: 3, name: 'M&Ms', description: 'Melt in your mouth', price: 0.99 },
    <Product>{ id: 4, name: 'Gum', description: 'For Chewing & Bubbles', price: 4.99 }
  ];

  getAll(): Array<Product> {
    return this.products.sort((a, b) => {
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
  }

  get(productId: number): Product {
    return Object.assign({}, this.products.find((product: Product) => product.id === productId));
  }

  save(product: Product) {
    if (!product.id) {
      // Add a new product
      product.id = this.products.length + 1;
      this.products = this.products.concat(product);
    } else {
      // Update current product
      const foundIndex = this.products.findIndex((item: Product) => item.id === product.id);
      this.products[foundIndex] = Object.assign({}, product);
    }
  }
}
