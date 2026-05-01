import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { Router } from '@angular/router';
import { RouterConstants } from '../../constants/router-constants';
import { EventModel } from '../../models/eventModel';
import { NewsModel } from '../../models/newsModel';
import { MusicModel } from '../../models/musicModel';
import { ProductModel } from '../../models/productModel';
import { EventService } from '../../../services/event-services';
import { NewsService } from '../../../services/news-services';
import { MusicService } from '../../../services/music-services';
import { ProductService } from '../../../services/product-services';
@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  events: EventModel[] = [];
  news: NewsModel[] = [];
  musics: MusicModel[] = [];
  products: ProductModel[] = [];

  private EventService = inject(EventService);
  private NewsService = inject(NewsService);
  private MusicService = inject(MusicService);
  private ProductService = inject(ProductService);

  constructor(private router: Router) {}

  ngOnInit() {
    this.EventService.getAll().subscribe((data) =>
      this.events = data.$values.slice(0, 3)
    );

    this.NewsService.getAll().subscribe((data) =>
      this.news = data.$values.slice(0, 3)
    );

    this.MusicService.getAll().subscribe((data) =>
      this.musics = data.$values.slice(0, 3)
    );

    this.ProductService.getAll().subscribe((data) =>
      this.products = data.$values.slice(0, 3)
    );
  }

  navToTicket(id: number): void {
    this.router.navigate([RouterConstants.TICKET, id]);
  }

  navToNews(id: number): void {
    this.router.navigate([RouterConstants.NEWS, id]);
  }

  navToProduct(id: number): void {
    this.router.navigate([RouterConstants.PRODUCT, id]);
  }

  selectDay(day: number): string {
    switch (day) {
      case 1:
        return 'Monday';
      case 2:
        return 'Tuesday';
      case 3:
        return 'Wednesday';
      default:
        return '';
    }
  }

  selectHour(hora: number): string {
    switch (hora) {
      case 1:
        return 'Morning';
      case 2:
        return 'Afternoon';
      case 3:
        return 'Night';
      default:
        return '';
    }
  }

  selectStage(escenario: number): string {
    switch (escenario) {
      case 1:
        return 'Main Stage';
      case 2:
        return 'Second Stage';
      case 3:
        return 'Third Stage';
      default:
        return '';
    }
  }
}
