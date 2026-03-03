import { Component } from '@angular/core';
import { Event } from '../../../models/event';
import { NgOptimizedImage } from "@angular/common";
import { Input } from '@angular/core';

@Component({
  selector: 'app-tickets',
  imports: [ NgOptimizedImage ],
  templateUrl: './tickets.html',
  styleUrl: './tickets.css',
})

export class Tickets {
  @Input() day: string = "";
  @Input() hour: string= "";
  events: Event[] = [
    { date: 'Monday', hour: 'Morning', stage: 'Main Stage' },
    { date: 'Monday', hour: 'Afternoon', stage: 'Main Stage' },
    { date: 'Monday', hour: 'Night', stage: 'Main Stage' },
    { date: 'Monday', hour: 'Morning', stage: 'Second Stage' },
    { date: 'Monday', hour: 'Afternoon', stage: 'Second Stage' },
    { date: 'Monday', hour: 'Night', stage: 'Second Stage' },
    { date: 'Monday', hour: 'Morning', stage: 'Third Stage' },
    { date: 'Monday', hour: 'Afternoon', stage: 'Third Stage' },
    { date: 'Monday', hour: 'Night', stage: 'Third Stage' },
    { date: 'Tuesday', hour: 'Morning', stage: 'Main Stage' },
    { date: 'Tuesday', hour: 'Afternoon', stage: 'Main Stage' },
    { date: 'Tuesday', hour: 'Night', stage: 'Main Stage' },
    { date: 'Tuesday', hour: 'Morning', stage: 'Second Stage' },
    { date: 'Tuesday', hour: 'Afternoon', stage: 'Second Stage' },
    { date: 'Tuesday', hour: 'Night', stage: 'Second Stage' },
    { date: 'Tuesday', hour: 'Morning', stage: 'Third Stage' },
    { date: 'Tuesday', hour: 'Afternoon', stage: 'Third Stage' },
    { date: 'Tuesday', hour: 'Night', stage: 'Third Stage' },
    { date: 'Wednesday', hour: 'Morning', stage: 'Main Stage' },
    { date: 'Wednesday', hour: 'Afternoon', stage: 'Main Stage' },
    { date: 'Wednesday', hour: 'Night', stage: 'Main Stage' },
    { date: 'Wednesday', hour: 'Morning', stage: 'Second Stage' },
    { date: 'Wednesday', hour: 'Afternoon', stage: 'Second Stage' },
    { date: 'Wednesday', hour: 'Night', stage: 'Second Stage' },
    { date: 'Wednesday', hour: 'Morning', stage: 'Third Stage' },
    { date: 'Wednesday', hour: 'Afternoon', stage: 'Third Stage' },
    { date: 'Wednesday', hour: 'Night', stage: 'Third Stage' },
  ];
}
