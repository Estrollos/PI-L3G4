import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class EventService {
  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:5001/api/event';

  public getAll() : Observable<any>{
    return this.http.get(this.apiUrl);
  }

  public getById(id: number) : Observable<any>{
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
