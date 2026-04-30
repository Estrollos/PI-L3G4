import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterConstants } from '../../constants/router-constants';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recover-pass',
  imports: [FormsModule],
  templateUrl: './recover-pass.html',
  styleUrl: './recover-pass.css',
})
export class RecoverPass {
  email: string = '';

  constructor(private router: Router) {}

  navToChangePass(): void {
    this.router.navigate([RouterConstants.CHANGE_PASSWORD, this.email]);
  }
}
