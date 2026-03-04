import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterConstants } from '../../constants/router-constants';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.html',
  styleUrl: './ticket.css',
})
export class Ticket{
  quantity: number = 1;

  constructor(private router: Router) {}

  plus() : void{
    this.quantity++;
  }

  minus() : void{
    if(this.quantity > 1){
       this.quantity--;
    }
  }

  get price(): number {
    return this.quantity * 25;
  }

  navToLogin(): void {
    this.router.navigate([RouterConstants.HOME]);
  }
}
