import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductsService } from './products.service';
import { CartService } from '../core/services/cart.service';
import { NotificationService } from '../core/services/notification.service';

import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/last';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: Product;

  constructor(private productService: ProductsService, private cartService: CartService,
              private notificationService: NotificationService) {}

  ngOnInit() {
    this.productService.getAll().subscribe((products: Array<Product>) => this.products = products);
  }

  selectedProductHandler(productId: number) {
    this.productService.get(productId).subscribe((product: Product) => this.selectedProduct = product);
  }

  newProductHandler() {
    this.selectedProduct = <Product>{};
  }

  saveProductHandler(product: Product) {
    // Validate the fields are not empty
    if (!product.name || !product.description || !product.price) {
      return;
    }

    this.productService.save(product)
      .concat(this.productService.getAll())
      .last()
      .subscribe(
        (products: Array<Product>) => this.products = products,
        () => {},
        () => this.selectedProduct = null
        );
  }

  addToCartHandler(productId: number) {
    this.cartService.addProduct(productId).subscribe(() => this.notificationService.notify('cartUpdated'));
  }
}
