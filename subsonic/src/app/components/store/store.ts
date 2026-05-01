import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgOptimizedImage } from "@angular/common";
import { Router } from '@angular/router';
import { RouterConstants } from '../../constants/router-constants';
import { ProductModel } from '../../models/productModel';
import { ProductService } from '../../../services/product-services';

@Component({
  selector: 'app-store',
  imports: [ MatIconModule, NgOptimizedImage ],
  templateUrl: './store.html',
  styleUrl: './store.css',
})
export class Store{

  constructor(private router: Router,
    private chRef: ChangeDetectorRef
  ) {}

  navToProduct(id: number) : void{
    this.router.navigate([RouterConstants.PRODUCT, id]);
  }

  private ProductService = inject(ProductService);
  products: ProductModel[] = [];

  ngOnInit() {
    this.ProductService.getAll().subscribe((data) => {
      this.products = data.$values;
      this.chRef.detectChanges();
    });
  }
}
