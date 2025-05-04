import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];

  addProductToCart(product: Product): void {
    const existingProduct = this.cart.find((p) => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += product.quantity;
    } else {
      this.cart.push({ ...product });
    }
  }

  getCart(): Product[] {
    return this.cart;
  }

  updateProductQuantity(product: Product, quantity: number): void {
    const existingProduct = this.cart.find((p) => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity = quantity;
    }
  }

  removeProductFromCart(product: Product): void {
    this.cart = this.cart.filter((p) => p.id !== product.id);
  }

  clearCart(): void {
    this.cart = [];
  }
}
