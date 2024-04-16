import { Component } from '@angular/core';
import {LoginComponent} from "./login/login.component";

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    LoginComponent
  ],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {

}

