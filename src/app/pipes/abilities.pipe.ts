import { Pipe, PipeTransform } from '@angular/core';
import { Ability } from '../models/Pokemon';
import { capitalizeComposed } from '../utils/pokemon.utils';

@Pipe({
    name: 'abilities',
    standalone: true
})
export class AbilitiesPipe implements PipeTransform {

    transform(value: Ability[]): string {
        return value.reduce((saved, current, index) => {
            let { name } = current.ability!;
            if (name.includes('-')) {
                name = capitalizeComposed(name);
            } else {
                name = name[0].toLocaleUpperCase() + name.slice(1);
            }

            return saved += index == value.length - 1 ? `${name}` : `${name}, `;
        }, "");
    }

}
