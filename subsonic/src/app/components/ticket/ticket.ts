import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RouterConstants } from '../../constants/router-constants';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../../services/event-services';
import { SpaceService } from '../../../services/space-services';
import { EventModel } from '../../models/eventModel';
import { SpaceModel } from '../../models/spaceModel';
import { BuyTicketService } from '../../../services/buyTicket-services';
import { BuyTicketModel } from '../../models/buyTicketModel';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.html',
  styleUrl: './ticket.css',
})
export class Ticket{
  quantity: number = 1;
  message: string = '';

  constructor(private router: Router) {}

  plus() : void{
    this.quantity++;
  }

  minus() : void{
    if(this.quantity > 1){
       this.quantity--;
    }
  }

  getPrice(price: number): number {
    return this.quantity * price;
  }

  navToLogin(): void {
    if (!this.event){
      return;
    }
    if (this.quantity > this.event.nEntradas) {
      this.message = 'No hay suficientes entradas disponibles';
      return;
    }
    const ticket: BuyTicketModel = {
      clienteId: Number(sessionStorage.getItem('id')),
      eventoId: this.event.id,
      cantidad: this.quantity,
      fechaCompra: new Date()
    };
    this.event.nEntradas -= this.quantity;

    this.BuyTicketService.create(ticket).subscribe(() =>
      this.EventService.update(this.event!).subscribe(() =>
        this.router.navigate([RouterConstants.HOME])
      )
    );
  }

  private BuyTicketService = inject(BuyTicketService);

  event: EventModel | null = null;
  private route = inject(ActivatedRoute);
  private EventService = inject(EventService);

  spaces: SpaceModel[] = [];
  private SpaceService = inject(SpaceService);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.EventService.getById(id).subscribe((event) => {
        this.event = event;
      });

    this.SpaceService.getAll().subscribe((space) => {
        this.spaces = space.$values;
      });
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
