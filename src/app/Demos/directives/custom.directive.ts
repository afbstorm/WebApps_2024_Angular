import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[changesBackground]',
  standalone: true
})
export class CustomDirective {

  // ElementRef : C'est un wrapper autour d'un élément natif dans le View. Cela peut être utilisé pour manipuler les propriétés de l'élément DOM.
  // Renderer2: C'est une classe abstraite qui fournit des méthodes pour manipuler l'UI. Ceci est plus sûr que ElementRef car il donne plus de possibilités de rendre votre application compatible avec le serveur.

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'yellow'
    );
  }

}
