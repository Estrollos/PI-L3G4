import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { SpaceModel } from "../app/models/spaceModel";

@Injectable({ providedIn: 'root' })
export class SpaceService {
  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:5245/api/space';

  public getAll() : Observable<any>{
    return this.http.get(this.apiUrl);
  }

  public getById(id: number) : Observable<any>{
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  public update(event: SpaceModel) : Observable<any>{
    return this.http.put(this.apiUrl, event);
  }
}
