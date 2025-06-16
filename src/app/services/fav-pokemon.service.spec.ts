import { TestBed } from '@angular/core/testing';

import { FavPokemonService } from './fav-pokemon.service';

describe('FavPokemonService', () => {
  let service: FavPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
