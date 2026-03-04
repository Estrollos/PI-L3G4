import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-stall-info',
  imports: [FormsModule],
  templateUrl: './stall-info.html',
  styleUrl: './stall-info.css',
})
export class StallInfo {
  selectedServices: string[] = [];

  onCheck(service: string, event: any) {
    if (event.target.checked){
      this.selectedServices.push(service);
    }
    else{
      this.selectedServices = this.selectedServices.filter(s => s !== service);
    }
  }
}
