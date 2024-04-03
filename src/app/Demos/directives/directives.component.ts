import { Component } from '@angular/core';
import {CurrencyPipe, DatePipe, LowerCasePipe, NgForOf, NgIf, TitleCasePipe, UpperCasePipe} from "@angular/common";
import {CustomPipe} from "../pipes/custom.pipe";
import {CustomDirective} from "./custom.directive";

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [
    CurrencyPipe,
    CustomPipe,
    DatePipe,
    LowerCasePipe,
    TitleCasePipe,
    UpperCasePipe,
    NgIf,
    NgForOf,
    CustomDirective
  ],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
  title: string = 'Demos des directives en Angular';

  showIfTrueNgIf: boolean = false;
  showIfTrueIf: boolean = false;

  arrayOfThingsToShow: string[] = ['Hello', 'World', 'WebApps2024', 'From', 'Angular is Great', 'React is Better'];

  showAndHideInvisibleThings() {
    this.showIfTrueNgIf = !this.showIfTrueNgIf
  }
  showAndHideInvisibleThings2() {
    this.showIfTrueIf = !this.showIfTrueIf
  }

}
