import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'stylePokemonId',
    standalone: true
})
export class StylePokemonIdPipe implements PipeTransform {

    transform(id: string): string {
        return "#" + `${id}`.padStart(3, "0");
    }

}
