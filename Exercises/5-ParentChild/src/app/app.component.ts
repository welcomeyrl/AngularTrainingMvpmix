import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productDetails: Product;
  products: Product[] = [
    <Product>{ id: 1, name: 'Twix', description: 'Left or Right?', price: 10.99 },
    <Product>{ id: 2, name: 'Snickers', description: 'Peanuts & Caramel', price: 1.99 },
    <Product>{ id: 3, name: 'M&Ms', description: 'Melt in your mouth', price: 0.99 },
    <Product>{ id: 4, name: 'Gum', description: 'For Chewing & Bubbles', price: 4.99 }
  ];

  trackByProducts(index: number, product: Product): number {
    return product.id;
  }

  productClickHandler(product: Product) {
    this.productDetails = product;
  }

  newProductClickHandler() {
    this.productDetails = <Product>{};
  }

  saveClickHandler() {
    // Validate the fields are not empty
    if (!this.productDetails.name || !this.productDetails.description || !this.productDetails.price) {
      return;
    }

    if (!this.productDetails.id) {
      // Add a new product
      this.productDetails.id = this.products.length + 1;
      this.products = this.products.concat(this.productDetails);
    } else {
      // Update current product
      const foundIndex = this.products.findIndex((product: Product) => product.id === this.productDetails.id);
      this.products[foundIndex] = Object.assign({}, this.productDetails);
    }

    this.productDetails = null;
  }

  cancelClickHandler() {
    this.productDetails = null;
  }
}
