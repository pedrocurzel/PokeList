//Partial
export class Pokemon {
    id?: string;
    name?: string;
    types: PokemonType[] = [];
    sprites?: {
        front_default: string;
    };
    weight?: number;
    height?: number;
    abilities: Ability[] = [];
}


class PokemonType {
    slot?: number;
    type?: {
        name: string;
        url: string;
    }
}

class Ability {
    ability?: {
        name: string;
        url: string;
    }
    slot?: number;
    is_hidden?: boolean;
}