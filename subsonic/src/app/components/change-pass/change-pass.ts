import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterConstants } from '../../constants/router-constants';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../../services/client-services';

@Component({
  selector: 'app-change-pass',
  imports: [FormsModule],
  templateUrl: './change-pass.html',
  styleUrl: './change-pass.css',
})
export class ChangePass {
  contrasena: string = '';

  constructor(private router: Router) {}

  private ClientService = inject(ClientService);
  private route = inject(ActivatedRoute);

  changePassword(): void {
    const email = this.route.snapshot.paramMap.get('email');
    this.ClientService.getByEmail(email!).subscribe((client) => {
        client.contrasena = this.contrasena;
        this.ClientService.update(client).subscribe(() =>{
          this.router.navigate([RouterConstants.LOGIN])
        });
    });
  }
}
