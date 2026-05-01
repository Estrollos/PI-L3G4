import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RouterConstants } from '../../constants/router-constants';
import { ClientService } from '../../../services/client-services';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  contrasena: string = '';
  email: string = '';

  constructor(private router: Router) {}

  navToForgotPassword(): void {
    this.router.navigate([RouterConstants.FORGOT_PASSWORD]);
  }

  navToCreateAccount(): void {
    this.router.navigate([RouterConstants.CREATE_ACCOUNT]);
  }

  private ClientService = inject(ClientService);

  login(): void {
    this.ClientService.login(this.email, this.contrasena).subscribe((client) => {
      sessionStorage.setItem('token', client.accessToken);
      sessionStorage.setItem('name', client.nombre);
      sessionStorage.setItem('id', client.id);
      sessionStorage.setItem('rol', client.rol);
      window.location.reload();
    });
  }
}
