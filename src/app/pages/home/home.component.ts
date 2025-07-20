import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service'; // ✅ Import this

@Component({
  selector: 'app-home',
  standalone: true, // ✅ Yes, this is correct
  imports: [CommonModule], // ✅ Use this for *ngFor, *ngIf
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products = [
    { id: 1, name: 'Product 1', price: 100, description: 'Description of product 1' },
    { id: 2, name: 'Product 2', price: 200, description: 'Description of product 2' },
    { id: 3, name: 'Product 3', price: 300, description: 'Description of product 3' },
  ];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart(product: any): void {
    this.cartService.addProductToCart(product);
  }
}
