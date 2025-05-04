import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';  // Import the Product model
import { CartService } from '../../services/cart.service';  // Import CartService

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']  // Ensure this file exists
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];  // Array to hold the product data

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Sample product data, replace this with real data
    this.products = [
      {
        id: 1,
        name: '4m by 1,05m, 10mm Twin-walled Polycarbonate sheets',
        price: 68.00,
        image: 'item.png', // Image path
        description: 'Durable polycarbonate sheets for roofing.',
        quantity: 1
      },
      {
        id: 2,
        name: '3.5m by 1,05m, 10mm Twin-walled Polycarbonate sheets',
        price: 59.50,
        image: 'path-to-image.jpg',
        description: 'Lightweight and long-lasting polycarbonate.',
        quantity: 1
      },
      {
        id: 3,
        name: '3m by 1,05m, 10mm Twin-walled Polycarbonate sheets',
        price: 51.00,
        image: 'path-to-image.jpg',
        description: 'UV-resistant polycarbonate material.',
        quantity: 1
      },
      {
        id: 4,
        name: '2.5m by 1,05m, 10mm Twin-walled Polycarbonate sheets',
        price: 42.50,
        image: 'path-to-image.jpg',
        description: 'Perfect for small projects and lightweight.',
        quantity: 1
      }
    ];
  }

  addToCart(product: Product): void {
    this.cartService.addProductToCart(product);
  }
}
