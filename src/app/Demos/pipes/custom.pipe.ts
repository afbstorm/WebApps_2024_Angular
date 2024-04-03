import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
  standalone: true
})
export class CustomPipe implements PipeTransform {

  transform(a: number): string {
    const numberMapping = [
      'zero', 'un', 'deux', 'trois', 'quatre',
      'cinq', 'six', 'sept', 'huit', 'neuf', 'dix'
    ];

    return numberMapping[a];


  }

}
