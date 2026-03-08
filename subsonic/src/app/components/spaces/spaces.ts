import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterConstants } from '../../constants/router-constants';

@Component({
  selector: 'app-spaces',
  imports: [FormsModule],
  templateUrl: './spaces.html',
  styleUrl: './spaces.css',
})
export class Spaces {
  day: string = '';
  stage: string = '';
  message: string = '';

  constructor(private router: Router) {}

  navToLogin(): void {
    this.router.navigate([RouterConstants.HOME]);
  }

  validate(): void {
    if (!this.day || !this.stage){
      this.message = 'Select day and stage';
    }
    else{
      this.message = '';
      this.navToLogin();
    }
  }

    toggleDay(value: string) {
    if (this.day === value) {
      this.day = '';
    }
  }

  toggleStage(value: string) {
    if (this.stage === value) {
      this.stage = '';
    }
  }
}
