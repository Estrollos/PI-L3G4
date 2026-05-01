import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ProductVariantService {
  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:5245/api/productVariant';

  public getById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
