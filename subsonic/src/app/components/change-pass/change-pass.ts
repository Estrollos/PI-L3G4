import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterConstants } from '../../constants/router-constants';

@Component({
  selector: 'app-change-pass',
  imports: [],
  templateUrl: './change-pass.html',
  styleUrl: './change-pass.css',
})
export class ChangePass {
  constructor(private router: Router) {}

  navToLogin(): void {
    this.router.navigate([RouterConstants.LOGIN]);
  }
}
