import { Component } from '@angular/core';
import {ListeComponent} from "./liste/liste.component";

@Component({
  selector: 'app-panierv1',
  standalone: true,
  imports: [
    ListeComponent
  ],
  templateUrl: './panierv1.component.html',
  styleUrl: './panierv1.component.scss'
})
export class Panierv1Component {

  title: string = 'Exercice panier de course';

}
