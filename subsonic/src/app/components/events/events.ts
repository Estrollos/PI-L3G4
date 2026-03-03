import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tickets } from './tickets/tickets';

@Component({
  selector: 'app-events',
  imports: [ FormsModule, Tickets ],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  selectedDay: string = '';
  selectedHour: string = '';
}
