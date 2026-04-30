import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RouterConstants } from '../../constants/router-constants';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../../services/event-services';
import { SpaceService } from '../../../services/space-services';
import { EventModel } from '../../models/eventModel';
import { SpaceModel } from '../../models/spaceModel';

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

  getPrice(price: number): number {
    return this.quantity * price;
  }

  navToLogin(): void {
    this.router.navigate([RouterConstants.HOME]);
  }

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
