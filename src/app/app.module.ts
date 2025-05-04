import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';   // Import CommonModule for *ngIf, *ngFor
import { FormsModule } from '@angular/forms';     // Import FormsModule for ngModel

import { AppComponent } from './app.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes'; // import routes

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HomeComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,   // Ensure CommonModule is imported
    FormsModule,    // Ensure FormsModule is imported
    RouterModule.forRoot(routes)  // Add RouterModule for routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
