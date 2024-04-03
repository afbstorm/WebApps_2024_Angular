import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ChildComponent} from "./child/child.component";

@Component({
  selector: 'app-inout',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ChildComponent,
    FormsModule
  ],
  templateUrl: './inout.component.html',
  styleUrl: './inout.component.scss'
})
export class InoutComponent {



  title: string = 'Demos de input - output en Angular';
  result: number = 0;

  num1: number = 0;
  num2: number = 0;

  calculationResult(event: number) {
    this.result = event
  }

}
