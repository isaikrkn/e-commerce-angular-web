import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductListComponent } from './pages/product-list/product-list.component'; // Import the new component

export const routes: Routes = [
  { path: '', component: HomeComponent },  // Default route
  { path: 'products', component: ProductListComponent },  // Add the route for the product list page
  { path: 'cart', component: CartComponent },
  { path: 'product/:id', component: ProductDetailComponent }
];
