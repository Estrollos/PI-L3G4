import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { BuyTicketModel } from "../app/models/buyTicketModel";

@Injectable({ providedIn: 'root' })
export class BuyTicketService {
  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:5245/api/BuyTicket';

  public getAll() : Observable<any>{
    return this.http.get(this.apiUrl);
  }

  public getById(id: number) : Observable<any>{
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  public getByClienteId(clienteId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/cliente/${clienteId}`);
  }

  public update(client: BuyTicketModel) : Observable<any>{
    return this.http.put(this.apiUrl, client);
  }

  public create(client: BuyTicketModel) : Observable<any>{
    return this.http.post(this.apiUrl, client);
  }
}
