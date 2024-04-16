import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "./data.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-http',
  standalone: true,
  imports: [],
  templateUrl: './http.component.html',
  styleUrl: './http.component.scss'
})
export class HttpComponent implements OnInit, OnDestroy {
  todos!: any[];
  dataObs!: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataObs = this.dataService.getData().subscribe(data => {
      this.todos = data;
    });
  }

  ngOnDestroy() {
    this.dataObs.unsubscribe();
  }
}
