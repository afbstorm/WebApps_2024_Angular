import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import { SubmenuDirective } from "./submenu.directive";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    SubmenuDirective,
    NgForOf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  title: string = 'Cours Angular des WebApps 2024';

  links: Link[] = [
    {
      title: 'Demos',
      url: '/demos',
      isVisible: true,
      children: [
        {
          title: 'Bindings',
          url: '/demos/bindings',
          isVisible: false,
        },
        {
          title: 'Pipes',
          url: '/demos/pipes',
          isVisible: false,
        },
        {
          title: 'Directives',
          url: '/demos/directives',
          isVisible: false,
        },
        {
          title: 'Http',
          url: '/demos/http',
          isVisible: false,
        },
      ]
    },
    {
      title: 'Exos',
      url: '/exos',
      isVisible: true,
      children: [
        {
          title: 'Chrono',
          url: '/exos/chrono',
          isVisible: false,
        },
        {
          title: 'Tasks',
          url: '/exos/tasks',
          isVisible: false
        },
        {
          title: 'Forms',
          url: '/exos/forms',
          isVisible: false
        }
      ]
    }
  ]

  constructor() {
    console.log(this.links.map(link => link.children))
  }
}

class Link {
  title!: string;
  url?: string;
  children?: Link[];
  isVisible!: boolean;
}
