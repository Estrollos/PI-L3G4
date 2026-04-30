import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { ClientModel } from "../app/models/clientModel";

@Injectable({ providedIn: 'root' })
export class ClientService {
  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:5245/api/client';

  public getAll() : Observable<any>{
    return this.http.get(this.apiUrl);
  }

  public getById(id: number) : Observable<any>{
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  public getByEmail(email: string) : Observable<any>{
    return this.http.get(`${this.apiUrl}/email/${email}`);
  }

  public login(email: string, contrasena: string) : Observable<any>{
    return this.http.post(this.apiUrl + '/login', { email, contrasena });
  }

  public register(client: ClientModel) : Observable<any>{
    return this.http.post(this.apiUrl + '/register', client);
  }

  public update(client: ClientModel) : Observable<any>{
    return this.http.put(this.apiUrl, client);
  }
}
