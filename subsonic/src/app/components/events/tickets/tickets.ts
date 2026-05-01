import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { EventModel } from '../../../models/eventModel';
import { NgOptimizedImage } from '@angular/common';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { RouterConstants } from '../../../constants/router-constants';
import { EventService } from '../../../../services/event-services';

@Component({
  selector: 'app-tickets',
  imports: [NgOptimizedImage],
  templateUrl: './tickets.html',
  styleUrl: './tickets.css',
})
export class Tickets {
  @Input() day: string = '';
  @Input() hour: string = '';
  dia: number = 0;
  hora: number = 0;

  constructor(private router: Router,
    private chRef: ChangeDetectorRef
  ) {}

  navToTicket(id: number): void {
    this.router.navigate([RouterConstants.TICKET, id]);
  }

  events: EventModel[] = [];
  EventService = inject(EventService);

  ngAfterViewInit() {
      this.EventService.getAll().subscribe((events) => {
        this.events = events.$values;
        this.chRef.detectChanges();
      });
  }

  ngOnChanges() {
    switch (this.day) {
      case 'Monday':
        this.dia = 1;
        break;
      case 'Tuesday':
        this.dia = 2;
        break;
      case 'Wednesday':
        this.dia = 3;
        break;
      default: this.dia = 0;
    }

    switch (this.hour) {
      case 'Morning':
        this.hora = 1;
        break;
      case 'Afternoon':
        this.hora = 2;
        break;
      case 'Night':
        this.hora = 3;
        break;
      default: this.hora = 0;
    }
  }

  selectDay(day: number): string {
    switch (day) {
      case 1:
        return 'Monday';
      case 2:
        return 'Tuesday';
      case 3:
        return 'Wednesday';
      default:
        return '';
    }
  }

  selectHour(hora: number): string {
    switch (hora) {
      case 1:
        return 'Morning';
      case 2:
        return 'Afternoon';
      case 3:
        return 'Night';
      default:
        return '';
    }
  }

  selectStage(escenario: number): string {
    switch (escenario) {
      case 1:
        return 'Main Stage';
      case 2:
        return 'Second Stage';
      case 3:
        return 'Third Stage';
      default:
        return '';
    }
  }
}
