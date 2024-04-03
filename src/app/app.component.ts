import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BindingsComponent} from "./Demos/bindings/bindings.component";
import {NavbarComponent} from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BindingsComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'Cours Angular des WebApps 2024';
  // subtitle: string = 'Ils sont sympas'
}
