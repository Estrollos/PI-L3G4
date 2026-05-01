import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { BuyProductModel } from '../../models/buyProductModel';
import { BuyProductService } from '../../../services/buyProduct-services';
import { ProductVariantService  } from '../../../services/productVariant-services';
import { ProductService }  from '../../../services/product-services';
import { ProductModel } from '../../models/productModel';

@Component({
  selector: 'app-cart',
  imports: [NgOptimizedImage],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  precioTotal: number = 0;
  cart: BuyProductModel[] = [];
  products: ProductModel[] = [];
  private BuyProductService = inject(BuyProductService);
  private ProductVariantService  = inject(ProductVariantService );
  private ProductService  = inject(ProductService );

  constructor(private chRef: ChangeDetectorRef) {}

  ngOnInit() {
    const clienteId = Number(sessionStorage.getItem('id'));
    this.BuyProductService.getByClienteId(clienteId).subscribe((data) => {
        this.cart = data.$values;

        for(let compra of this.cart){
          this.ProductVariantService.getById(compra.productoVarianteId).subscribe((variante) => {
            this.ProductService.getById(variante.productoId).subscribe((product) => {
                this.products.push(product);
                this.precioTotal += product.precio;
                this.chRef.detectChanges();
              });
          });
        }
      });
  }

  deleteProducts() {
    this.cart.forEach((item) => {
      this.BuyProductService.delete(item.id!).subscribe();
      this.chRef.detectChanges();
    });

    this.products = [];
    this.precioTotal = 0;
  }
}
