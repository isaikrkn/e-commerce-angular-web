import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId: number | null = null;
  product: any;

  constructor(private route: ActivatedRoute, private cartService: CartService) {}

  ngOnInit(): void {
    this.productId = +this.route.snapshot.paramMap.get('id')!;
    this.loadProduct();
  }

  loadProduct(): void {
    // You can fetch product details from an API here
    // For now, using a mock product list
    const products = [
      { id: 1, name: 'Product 1', price: 100, description: 'Detailed description of product 1' },
      { id: 2, name: 'Product 2', price: 200, description: 'Detailed description of product 2' },
      { id: 3, name: 'Product 3', price: 300, description: 'Detailed description of product 3' },
    ];
    this.product = products.find((p) => p.id === this.productId);
  }

  addToCart(): void {
    if (this.product) {
      this.cartService.addProductToCart(this.product);
    }
  }
}
