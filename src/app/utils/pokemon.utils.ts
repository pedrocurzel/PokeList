export function getPokemonImg(pokemon: { name: string, url: string }) {
    const id = getPokemonId(pokemon.url);

    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}

export function getPokemonId(url: string) {
    const match = url.match(/\/(\d+)\/$/);

    if (!match) return "1";

    return match[1];
}

export function capitalize(name: string) {
    return name[0].toUpperCase() + name.slice(1);
}

export function capitalizeComposed(name: string) {
    let temp = name.split('-');
    return temp.map(x => {
        return x[0].toUpperCase() + x.slice(1);
    }).join('-');
}