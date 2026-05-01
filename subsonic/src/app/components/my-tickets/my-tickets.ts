import { Component, inject } from '@angular/core';
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
  events: EventModel[] = [];
  private BuyTicketService = inject(BuyTicketService);
  private EventService = inject(EventService);
  currentDate = new Date();

  ngOnInit() {
    const clienteId = Number(sessionStorage.getItem('id'));
    this.BuyTicketService.getByClienteId(clienteId).subscribe((data) => {
        this.tickets = data.$values;
        for (let ticket of this.tickets) {
          this.EventService.getById(ticket.eventoId).subscribe((event) =>
            this.events.push(event)
          );
        }
      });
  }
}
