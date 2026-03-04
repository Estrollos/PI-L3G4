import { Component } from '@angular/core';
import { Tickets } from './tickets/tickets';
import { DateCom } from './date/dateCom';

@Component({
  selector: 'app-events',
  imports: [ Tickets, DateCom ],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  selectedDay: string = '';
  selectedHour: string = '';

  receiveDay(day:string){
      this.selectedDay = day;
  }
  receiveHour(hour: string){
      this.selectedHour = hour;
  }
}
