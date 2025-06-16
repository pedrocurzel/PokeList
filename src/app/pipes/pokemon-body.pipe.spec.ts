import { PokemonBodyPipe } from './pokemon-body.pipe';

describe('PokemonBodyPipe', () => {
  it('create an instance', () => {
    const pipe = new PokemonBodyPipe();
    expect(pipe).toBeTruthy();
  });
});
