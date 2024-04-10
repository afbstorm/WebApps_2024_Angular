import { Component } from '@angular/core';

@Component({
  selector: 'app-chronov2',
  standalone: true,
  imports: [],
  templateUrl: './chronov2.component.html',
  styleUrl: './chronov2.component.scss'
})
export class Chronov2Component {
  zero: string = '0';
  hours: number = 0;
  minutes: number = 0;
  secondes: number = 0;
  timeUpdater: any;

  start() {
    this.timeUpdater = setInterval(() => {
      if (this.secondes < 59) {
        this.secondes += 1;
      } else {
        this.secondes = 0;
        this.minutes += 1;
      }

      if (this.minutes > 59) {
        this.minutes = 0;
        this.hours += 1;
      }
    }, 1000);
  }
  pause() {
    clearInterval(this.timeUpdater);
  }

  stop() {
    clearInterval(this.timeUpdater);
    this.secondes = 0;
    this.minutes = 0;
    this.hours = 0;
  }
}
