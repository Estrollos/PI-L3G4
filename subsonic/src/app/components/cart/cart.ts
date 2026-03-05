import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-cart',
  imports: [NgOptimizedImage],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  products = [
    { name: 'T-Shirt', price: 20, image: '/camisaL.webp' },
    { name: 'T-Shirt', price: 20, image: '/camisaL.webp' },
    { name: 'T-Shirt', price: 20, image: '/camisaL.webp' },
  ]
}
