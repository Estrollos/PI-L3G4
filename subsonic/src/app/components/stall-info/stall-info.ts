import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SpaceService } from '../../../services/space-services';
import { SpaceModel } from '../../models/spaceModel';
import { Router } from '@angular/router';
import { RouterConstants } from '../../constants/router-constants';
@Component({
  selector: 'app-stall-info',
  imports: [FormsModule],
  templateUrl: './stall-info.html',
  styleUrl: './stall-info.css',
})
export class StallInfo {
  info: string = '';
  nombre: string = '';
  message: string = '';
  selectedServices: string[] = [];

  constructor(private router: Router) {}

  onCheck(service: string, event: any) {
    if (event.target.checked){
      this.selectedServices.push(service);
    }
    else{
      this.selectedServices = this.selectedServices.filter(s => s !== service);
    }
  }

  private SpaceService = inject(SpaceService);
  spaces: SpaceModel[] = [];

  ngOnInit() {
    this.SpaceService.getAll().subscribe((data) =>
      this.spaces = data.$values
    );
  }

  confirm() : void {
    const clienteId = Number(sessionStorage.getItem('id'));
    const espacio = this.spaces.find(espacio => espacio.clienteId === clienteId);
    if (!espacio) {
      this.message = 'No space assigned to this client';
      return;
    }
    else{
      espacio.nombrePuesto = this.nombre;
      espacio.infoPuesto = this.info;
      espacio.tipos = this.selectedServices.map(s => ({
        espacioId: espacio.id,
        tipo: this.getTipoNumber(s)
      }));
      this.SpaceService.update(espacio).subscribe(() => {
        this.router.navigate([RouterConstants.HOME]);
      });
    }
  }

  getTipoNumber(tipo: string): number {
    switch(tipo) {
      case 'Food':
        return 1;
      case 'Drink':
        return 2;
      case 'Merchandising':
        return 3;
      default:
        return 0;
    }
  }
}
