import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnChanges{

  // Le décorateur @Input() défnini les propriétés que le composant parent peut passer au composant enfant.
  @Input() info!: string;
  @Input() num1!: number;
  @Input() num2!: number;

  // Le décorateur @Output() permet de créer un EventEmitter qui émet un événement au composant parent lorsqu'un calcul a lieu.
  @Output() calculToutCa: EventEmitter<number> = new EventEmitter<number>()

  // ngOnChanges fait partie du cycle de vie Angular qui est appelée lorsque les valeurs liées en entrée changent. Si num1 ou num2 change, elle déclenche le calcul.
  ngOnChanges(changes:SimpleChanges) {
    if ('num1' in changes || 'num2' in changes) {
      this.calculate();
    }
  }

  calculate(): void {
    const result = this.num1 + this.num2;
    this.calculToutCa.emit(result);
  };


}
