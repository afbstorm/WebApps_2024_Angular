import { Component } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {CurrencyPipe, DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe} from "@angular/common";
import {CustomPipe} from "./custom.pipe";

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe,
    CurrencyPipe,
    CustomPipe
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {
  title: string = 'Demos de pipes en Angular'

  stringMajuscule: string = 'hello les webapps';
  stringMinuscule: string = 'COMMENT ALLEZ-VOUS ?';

  firstEnMajuscule: string = 'c\'est simple les pipes, non ?';

  dateDuJour: Date = new Date();

  argentArgent: number = 42;

}
