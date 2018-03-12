import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';
import { CartService } from '../../core/services/cart.service';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<Product> = [];

  constructor(private productService: ProductsService, private cartService: CartService,
              private notificationService: NotificationService) {}

  ngOnInit() {
    this.productService.getAll().subscribe((products: Array<Product>) => this.products = products);
  }

  addToCartHandler(productId: number) {
    this.cartService.addProduct(productId).subscribe(() => this.notificationService.notify('cartUpdated'));
  }

  trackByProducts(index: number, product: Product): number {
    return product.id;
  }
}
