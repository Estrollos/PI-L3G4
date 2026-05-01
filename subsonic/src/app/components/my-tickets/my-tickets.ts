import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BuyTicketService } from '../../../services/buyTicket-services';
import { EventService } from '../../../services/event-services';
import { EventModel } from '../../models/eventModel';
import { BuyTicketModel } from '../../models/buyTicketModel';

@Component({
  selector: 'app-my-tickets',
  imports: [FormsModule],
  templateUrl: './my-tickets.html',
  styleUrl: './my-tickets.css',
})
export class MyTickets {
  option: string = 'NextEvents';
  tickets: BuyTicketModel[] = [];
  private BuyTicketService = inject(BuyTicketService);
  private EventService = inject(EventService);
  currentDate = new Date();

  pastEvents: any[] = [];
  nextEvents: any[] = [];

  constructor(private chRef: ChangeDetectorRef) {}

  ngOnInit() {
    const clienteId = Number(sessionStorage.getItem('id'));
    this.BuyTicketService.getByClienteId(clienteId).subscribe((data) => {
      this.tickets = data.$values;
      for (let ticket of this.tickets) {
        this.EventService.getById(ticket.eventoId).subscribe((event) => {
          if (new Date(event.fecha) < this.currentDate) {
            this.pastEvents.push({ event, ticket });
          } else {
            this.nextEvents.push({ event, ticket });
          }
          this.chRef.detectChanges();
        });
      }
    });
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
