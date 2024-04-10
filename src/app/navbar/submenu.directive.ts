import {AfterViewInit, Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appSubmenu]',
  standalone: true
})
export class SubmenuDirective implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.toggleVisibility('hidden');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.toggleVisibility('visible');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.toggleVisibility('hidden');
  }

  private toggleVisibility(display: string) {
    const submenu = this.el.nativeElement.querySelector('ul');
    this.renderer.setStyle(submenu, 'visibility', display);
  }
}
