import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dateCom',
  imports: [ FormsModule ],
  templateUrl: './dateCom.html',
  styleUrl: './dateCom.css',
})

export class DateCom {
  day:string = "";
  hour:string = "";

  @Output() selectedDay = new EventEmitter<string>();
  @Output() selectedHour= new EventEmitter<string>();

  sendDay(day: string) {
    this.selectedDay.emit(day);
  }
  sendHour(hour: string) {
      this.selectedHour.emit(hour);
  }

  toggleDay(value: string) {
    if (this.day === value) {
      this.day = '';
      this.sendDay('');
    }
  }

  toggleHour(value: string) {
    if (this.hour === value) {
      this.hour = '';
      this.sendHour('');
    }
  }
}
