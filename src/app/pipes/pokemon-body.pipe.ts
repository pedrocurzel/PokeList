import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonBody',
  standalone: true
})
export class PokemonBodyPipe implements PipeTransform {

  transform(value: number): string {
    return (value * 0.1).toFixed(2);
  }

}
