import { Component, inject } from '@angular/core';
import { NewsModel } from '../../models/newsModel';
import { NewsService } from '../../../services/news-services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notice',
  imports: [],
  templateUrl: './news.html',
  styleUrl: './news.css',
})
export class News {
  private NewsService = inject(NewsService);
  news: NewsModel | null = null;
  private route = inject(ActivatedRoute);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.NewsService.getById(id).subscribe((data) => {
      this.news = data;
    });
  }
}
