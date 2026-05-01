export interface ProductVariantModel {
  id: number;
  productoId: number;
  color: string;
  talla: number;
  stock: number;
}

export interface ProductImageModel {
  id: number;
  productoId: number;
  url: string;
}

export interface ProductModel {
  id: number;
  precio: number;
  nombre: string;
  info: string;
  variants: ProductVariantModel[];
  images: ProductImageModel[];
}
