import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterConstants } from '../../constants/router-constants';
import { SpaceService } from '../../../services/space-services';
import { SpaceModel } from '../../models/spaceModel';

@Component({
  selector: 'app-spaces',
  imports: [FormsModule],
  templateUrl: './spaces.html',
  styleUrl: './spaces.css',
})
export class Spaces {
  day: string = '';
  stage: string = '';
  message: string = '';
  dia: number = 0;
  escenario: number = 0;

  constructor(private router: Router) {}

  private SpaceService = inject(SpaceService);
  spaces: SpaceModel[] = [];

  ngOnInit() {
    this.SpaceService.getAll().subscribe((data) =>
      this.spaces = data.$values
    );
  }

  toggleDay(value: string) {
    if (this.day === value) {
      this.day = '';
    }
  }

  toggleStage(value: string) {
    if (this.stage === value) {
      this.stage = '';
    }
  }

  validate(): void {
    if (!this.day || !this.stage){
      this.message = 'Select day and stage';
    }
    else{
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
      switch (this.stage) {
        case 'Main':
          this.escenario = 1;
          break;
        case 'Second':
          this.escenario = 2;
          break;
        case 'Third':
          this.escenario = 3;
          break;
        default: this.escenario = 0;
      }

      const espacio = this.spaces.find(s => s.dia === this.dia && s.escenario === this.escenario);
      if (!espacio) {
        this.message = 'Space not found';
        return;
      }
      else{
        if (!espacio.libre) {
          this.message = 'This space is already taken';
          return;
        }
        else{
            const clienteId = Number(sessionStorage.getItem('id'));
            espacio.clienteId = clienteId;
            espacio.libre = false;
            this.SpaceService.update(espacio).subscribe(() => {
              this.message = '';
              this.router.navigate([RouterConstants.HOME]);
            });
        }
      }
    }
  }
}
