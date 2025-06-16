import { Pipe, PipeTransform } from '@angular/core';
import { capitalizeComposed } from '../utils/pokemon.utils';

@Pipe({
  name: 'capitalize',
  standalone: true
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    return capitalizeComposed(value);
  }

}
