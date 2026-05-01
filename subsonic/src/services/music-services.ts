import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { MusicModel } from "../app/models/musicModel";

@Injectable({ providedIn: 'root' })
export class MusicService {
  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:5245/api/music';

  public getAll() : Observable<any>{
    return this.http.get(this.apiUrl);
  }
}
