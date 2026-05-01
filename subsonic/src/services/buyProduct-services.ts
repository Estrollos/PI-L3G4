import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { BuyProductModel } from "../app/models/buyProductModel";

@Injectable({ providedIn: 'root' })
export class BuyProductService {
  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:5245/api/BuyProduct';

  public getAll() : Observable<any>{
    return this.http.get(this.apiUrl);
  }

  public getById(id: number) : Observable<any>{
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  public getByClienteId(clienteId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/cliente/${clienteId}`);
  }

  public update(client: BuyProductModel) : Observable<any>{
    return this.http.put(this.apiUrl, client);
  }

  public create(client: BuyProductModel) : Observable<any>{
    return this.http.post(this.apiUrl, client);
  }
}
