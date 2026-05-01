import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductModel, ProductVariantModel } from '../../models/productModel';
import { ProductService } from '../../../services/product-services';
import { ActivatedRoute, Router } from '@angular/router';
import { BuyProductService } from '../../../services/buyProduct-services';

@Component({
  selector: 'app-product',
  imports: [NgOptimizedImage, FormsModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  size: string = '';
  color: string = '';
  talla: number = 0;

  selectTypes: any[] = [];

  selectedType: any = null;

  constructor(private chRef: ChangeDetectorRef) {}

  toggleSize(value: string) {
    if (this.size === value) {
      this.size = '';
    }
  }

  toggleColor(value: string) {
    if (this.color === value) {
      this.color = '';
    }
    this.selectedType = this.selectTypes.find((t) => t.productColor === value);
  }

  selectTalla(talla: number): string {
    switch (talla) {
      case 1:
        return 'S';
      case 2:
        return 'M';
      case 3:
        return 'L';
      case 4:
        return 'XL';
      case 5:
        return 'XXL';
      default:
        return '';
    }
  }

  private ProductService = inject(ProductService);
  private BuyProductService = inject(BuyProductService);
  private route = inject(ActivatedRoute);
  product: ProductModel | null = null;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.ProductService.getById(Number(id)).subscribe((product) => {
      this.product = { ...product } as ProductModel;
      this.product.variants = [...product.variantes.$values] as ProductVariantModel[];
      this.selectTypes = this.fillSelectTypes(this.product.variants);
      this.chRef.detectChanges();
    });
  }

  Buy(): void {
    switch (this.size) {
      case 'S':
        this.talla = 1;
        break;
      case 'M':
        this.talla = 2;
        break;
      case 'L':
        this.talla = 3;
        break;
      case 'XL':
        this.talla = 4;
        break;
      case 'XXL':
        this.talla = 5;
        break;
      default:
        this.talla = 0;
    }

    const variant = this.product?.variants.find(
      (v) => v.color === this.color && v.talla === this.talla,
    );
    if (!variant) {
      return;
    }
    variant.stock = variant.stock - 1;
    if (this.product) {
      this.ProductService.update(this.product).subscribe(() => {
        this.BuyProductService.create({
          clienteId: Number(sessionStorage.getItem('id')),
          productoVarianteId: variant.id,
          fechaCompra: new Date(),
        }).subscribe();
        this.chRef.detectChanges();
      });
    }
  }

  private fillSelectTypes(variants: ProductVariantModel[]): any[] {
    const output: any[] = [];

    variants.forEach((element) => {
      if (!output.some((e) => e.productColor === element.color)) {
        var tallas = variants.filter((v) => v.color === element.color).map((v) => v.talla);
        output.push({ productColor: element.color, tallas: tallas });
      }
    });

    return output;
  }
}
