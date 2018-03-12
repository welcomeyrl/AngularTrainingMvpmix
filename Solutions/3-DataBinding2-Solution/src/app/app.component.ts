import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedProduct: Product;
  productDetails: Product = <Product>{};

  productClickHandler(product: Product) {
    this.selectedProduct = this.productDetails = product;
  }

  isSelectedProduct(productName: string) {
    return this.selectedProduct && this.selectedProduct.name === productName;
  }

  saveClickHandler() {
    console.log('Product Details: ', this.productDetails);
  }

  cancelClickHandler() {
    this.selectedProduct = null;
    this.productDetails = <Product>{};
  }
}
