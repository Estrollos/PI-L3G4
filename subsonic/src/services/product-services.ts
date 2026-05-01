import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { ProductModel } from "../app/models/productModel";

@Injectable({ providedIn: 'root' })
export class ProductService {
  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:5245/api/product';

  public getAll() : Observable<any>{
    return this.http.get(this.apiUrl);
  }

  public getById(id: number) : Observable<any>{
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  public update(product: ProductModel) : Observable<any>{
    return this.http.put(this.apiUrl, product);
  }
}
