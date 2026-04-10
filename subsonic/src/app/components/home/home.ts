import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { Router } from '@angular/router';
import { RouterConstants } from '../../constants/router-constants';

@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  constructor(private router: Router) {}

  navToTicket(): void{
    this.router.navigate([RouterConstants.TICKET]);
  }

  navToNews(): void{
    this.router.navigate([RouterConstants.NEWS]);
  }

  navToProduct(): void{
    this.router.navigate([RouterConstants.PRODUCT]);
  }

  events = [
    { day: 'Mon', hour: 'Morn' },
    { day: 'Tues', hour: 'After'},
    { day: 'Wedn', hour: 'Night' },
  ]

  news = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ]

  musics = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ]

  products = [
    { name: 'T-Shirt', price: 20, image: '/camisaL.webp' },
    { name: 'T-Shirt', price: 20, image: '/camisaL.webp' },
    { name: 'T-Shirt', price: 20, image: '/camisaL.webp' },
  ]
}
