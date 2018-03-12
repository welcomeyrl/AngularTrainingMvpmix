import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductsService } from './products.service';
import { CartService } from '../core/services/cart.service';
import { NotificationService } from '../core/services/notification.service';

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
    this.getProducts();
  }

  selectedProductHandler(productId: number) {
    this.selectedProduct = this.productService.get(productId);
  }

  newProductHandler() {
    this.selectedProduct = <Product>{};
  }

  saveProductHandler(product: Product) {
    // Validate the fields are not empty
    if (!product.name || !product.description || !product.price) {
      return;
    }

    this.productService.save(product);
    this.getProducts();
    this.selectedProduct = null;
  }

  addToCartHandler(productId: number) {
    this.cartService.addProduct(productId);
    this.notificationService.notify('cartUpdated');
  }

  private getProducts() {
    this.products = this.productService.getAll();
  }
}
