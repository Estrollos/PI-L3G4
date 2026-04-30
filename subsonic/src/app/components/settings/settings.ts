import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../../services/client-services';
import { ClientModel } from '../../models/clientModel';

@Component({
  selector: 'app-settings',
  imports: [FormsModule],
  templateUrl: './settings.html',
  styleUrl: './settings.css',
})
export class Settings {
  nombre: string = '';
  apellidos: string = '';
  email: string = '';
  direccion: string = '';
  telefono: string = '';

  ClientService = inject(ClientService);
  client: ClientModel | null = null;

  ngOnInit(): void {
    const id = Number(sessionStorage.getItem('id'));
    this.ClientService.getById(id).subscribe((client) => {
      this.client = client;
    });
  }

  changeProfile(): void {
    const id = Number(sessionStorage.getItem('id'));
    this.ClientService.getById(id).subscribe((client) => {
        client.nombre = this.nombre;
        client.apellido = this.apellidos;
        client.email = this.email;
        client.direccion = this.direccion;
        client.tlf = this.telefono;
        this.ClientService.update(client).subscribe();
    });
  }
}
