import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgOptimizedImage } from "@angular/common";
import { Router } from '@angular/router';
import { RouterConstants } from '../../constants/router-constants';

@Component({
  selector: 'app-store',
  imports: [ MatIconModule, NgOptimizedImage ],
  templateUrl: './store.html',
  styleUrl: './store.css',
})
export class Store {

  constructor(private router: Router) {}

  navToProduct() : void{
    this.router.navigate([RouterConstants.PRODUCT]);
  }

  products = [
    { name: 'T-Shirt', price: 20, image: '/camisaL.webp' },
    { name: 'T-Shirt', price: 20, image: '/camisaL.webp' },
    { name: 'T-Shirt', price: 20, image: '/camisaL.webp' },
    { name: 'T-Shirt', price: 20, image: '/camisaL.webp' },
    { name: 'T-Shirt', price: 20, image: '/camisaL.webp' },
    { name: 'T-Shirt', price: 20, image: '/camisaL.webp' },
  ];
}
