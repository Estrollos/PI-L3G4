import { Component, inject } from '@angular/core';
import { Event } from '../../../models/event';
import { NgOptimizedImage } from "@angular/common";
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { RouterConstants } from '../../../constants/router-constants';
import { EventService } from '../../../../services/event-services';

@Component({
  selector: 'app-tickets',
  imports: [ NgOptimizedImage ],
  templateUrl: './tickets.html',
  styleUrl: './tickets.css',
})

export class Tickets {
  @Input() day: string = "";
  @Input() hour: string= "";

  constructor(private router: Router) {}

  navToTicket() : void{
    this.router.navigate([RouterConstants.TICKET]);
  }
  events: any [] = [];
  EventService = inject(EventService);
  contructor(){
    this.EventService.getAll().subscribe( events => {
      this.events = events;
    })
  }
}
