import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-chrono',
  standalone: true,
  imports: [],
  templateUrl: './chrono.component.html',
  styleUrl: './chrono.component.scss'
})
export class ChronoComponent implements OnInit, OnDestroy{

  date: Date = new Date();
  hours: number = this.date.getHours();
  minutes: number = this.date.getMinutes();
  seconds: number = this.date.getSeconds();

  clockInterval: any;

  ngOnInit() {
    this.start();
  }

  start() {
    this.clockInterval = setInterval(() => {
      this.date = new Date();
      this.hours = this.date.getHours();
      this.minutes = this.date.getMinutes();
      this.seconds = this.date.getSeconds();
    }, 1000)
  }

  pause() {
    if (this.clockInterval) {
      clearInterval(this.clockInterval)
    }
  }

  stop() {
    this.pause();
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.clockInterval = null;
  }

  ngOnDestroy() {
    this.pause();
  }
}
