import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ For *ngFor
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true, // ✅ Required for standalone components
  imports: [CommonModule], // ✅ Needed for structural directives
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.products = [
      {
        id: 1,
        name: '4m by 1,05m, 10mm Twin-walled Polycarbonate sheets',
        price: 68.00,
        image: 'assets/item.png', // Make sure this path is correct
        description: 'Durable polycarbonate sheets for roofing.',
        quantity: 1
      },
      {
        id: 2,
        name: '3.5m by 1,05m, 10mm Twin-walled Polycarbonate sheets',
        price: 59.50,
        image: 'assets/item.png',
        description: 'Lightweight and long-lasting polycarbonate.',
        quantity: 1
      },
      {
        id: 3,
        name: '3m by 1,05m, 10mm Twin-walled Polycarbonate sheets',
        price: 51.00,
        image: 'assets/item.png',
        description: 'UV-resistant polycarbonate material.',
        quantity: 1
      },
      {
        id: 4,
        name: '2.5m by 1,05m, 10mm Twin-walled Polycarbonate sheets',
        price: 42.50,
        image: 'assets/item.png',
        description: 'Perfect for small projects and lightweight.',
        quantity: 1
      }
    ];
  }

  addToCart(product: Product): void {
    this.cartService.addProductToCart(product);
  }
}
