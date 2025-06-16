//Partial
export class Pokemon {
    id?: string;
    name?: string;
    types: PokemonType[] = [];
    sprites?: {
        front_default: string;
        back_default: string;
        back_shiny: string;
        front_shiny: string;
    };
    weight?: number;
    height?: number;
    abilities: Ability[] = [];

    stats: Stat[] = [];
}

class Stat {
    base_stat?: number;
    effort?: number;
    stat?: {
        name: string;
    }
}

class PokemonType {
    slot?: number;
    type?: {
        name: string;
        url: string;
    }
}

export class Ability {
    ability?: {
        name: string;
        url: string;
    }
    slot?: number;
    is_hidden?: boolean;
}