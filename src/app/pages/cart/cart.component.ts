import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';  // Import the Product model
import { CommonModule } from '@angular/common';  // Import CommonModule for *ngIf, *ngFor
import { FormsModule } from '@angular/forms';    // Import FormsModule for ngModel

@Component({
  selector: 'app-cart',
  standalone: true,          // Declare the component as standalone
  imports: [CommonModule, FormsModule],  // Include the necessary modules
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']  // If you want to use CSS instead of SCSS
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];  // Now using Product[] to type the cartItems
  totalAmount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
    this.calculateTotal();
  }

  updateQuantity(product: Product, quantity: number): void {
    this.cartService.updateProductQuantity(product, quantity);
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.totalAmount = this.cartItems.reduce((sum, product) => sum + product.price * product.quantity, 0);
  }

  removeItem(product: Product): void {
    this.cartService.removeProductFromCart(product);
    this.cartItems = this.cartService.getCart();
    this.calculateTotal();
  }

  checkout(): void {
    // Implement your checkout logic (e.g., integrating with payment gateway)
  }
}
