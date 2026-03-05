import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [NgOptimizedImage, FormsModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  size:string = "";

  @Output() selecteProduct = new EventEmitter<string>();

  sendProduct(size: string) {
    this.selecteProduct.emit(size);
  }

  toggleDay(value: string) {
    if (this.size === value) {
      this.size = '';
    }
  }
}
