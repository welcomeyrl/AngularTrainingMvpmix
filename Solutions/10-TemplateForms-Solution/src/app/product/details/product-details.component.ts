import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  item: Product = <Product>{};

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductsService) {}

  ngOnInit() {
    const productId = +this.route.snapshot.paramMap.get('id');

    if (productId) {
      this.productService.get(productId).subscribe((product: Product) => this.item = product);
    }
  }

  saveProductHandler(product: Product) {
    this.productService.save(product).subscribe(() => this.router.navigate(['/Products']));
  }
}
