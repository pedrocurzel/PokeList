export function getPokemonImg(pokemon: {name: string, url: string}) {
    const id = getPokemonId(pokemon.url);

    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}

export function getPokemonId(url: string) {
    const match = url.match(/\/(\d+)\/$/);
    return match ? match[1] : 1;
}

export function capitalize(name: string) {
    return name[0].toUpperCase() + name.slice(1);
}