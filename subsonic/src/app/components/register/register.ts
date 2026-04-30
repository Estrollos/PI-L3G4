import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterConstants } from '../../constants/router-constants';
import { ClientModel } from '../../models/clientModel';
import { ClientService } from '../../../services/client-services';

@Component({
  selector: 'app-register',
  imports: [ FormsModule ],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  name: string = '';
  surnames: string = '';
  email: string = ''
  contrasena: string = '';
  confirmarContrasena: string = '';
  direccion: string = '';
  tlf: string = '';
  option: string = '';

  constructor(private router: Router) {}

  navToLogin(): void {
    this.register();
    this.router.navigate([RouterConstants.LOGIN]);
  }

  client: ClientModel | null = null;
  private ClientService = inject(ClientService)

  register(): void {
    const client: ClientModel = {
      nombre: this.name,
      apellido: this.surnames,
      email: this.email,
      contrasena: this.contrasena,
      direccion: this.direccion,
      tlf: this.tlf,
      rol: this.option === 'No' ? 1 : 2
    };

    this.ClientService.register(client).subscribe((response) => {
          this.client = response;
    });
  }
}
