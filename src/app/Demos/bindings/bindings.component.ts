import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-bindings',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './bindings.component.html',
  styleUrl: './bindings.component.scss'
})
export class BindingsComponent {

  title: string = 'Demos de bindings en Angular';
  bindingOneWaySimple: string = 'Je suis appelé et affiché par la vue du composant';

  // ⚠️ En Angular, les propriétés CSS / SCSS / ... ne sont liés qu'entre l'HTML et le fichier CSS / SCSS / ...
  // Dans ce cas ci, la classe css n'est pas connue par le fichier CSS car intégré par la propriété innerHTML d'Angular
  // On doit donc ajouter la définition de la classe dans le fichier de style global (styles.scss)
  bindingOneWayAvecComposantHTML: string = 'Je ne <span class="bold">PEUX PAS</span> être modifié depuis la vue';

  bindingTwoWay: string = 'Je suis appelé et affiché par la vue du composant et je peux être modifié depuis la vue';

  adaptativeClass: boolean = true;

  disabledAttribute: boolean = false;
  eventBinding() {
    console.log('Voici un binding d\'événement, quand on clique sur le bouton je m\'active');
  }

  classBinding() {
    this.adaptativeClass = !this.adaptativeClass
  }

  attributeBinding() {
    this.disabledAttribute = true;
  }
}
