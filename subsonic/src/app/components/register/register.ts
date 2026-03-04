import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterConstants } from '../../constants/router-constants';

@Component({
  selector: 'app-register',
  imports: [ FormsModule ],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  option: string = '';

  constructor(private router: Router) {}

  navToLogin(): void {
    this.router.navigate([RouterConstants.LOGIN]);
  }
}
