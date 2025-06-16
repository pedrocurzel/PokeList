import { TestBed,  } from '@angular/core/testing';

import { ApiService } from './api.service';
import { provideHttpClient  } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from  '@angular/common/http/testing';
import { Pokemon } from '../models/Pokemon';

fdescribe('ApiService', () => {
    let service: ApiService;
    let httpCtrl: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                provideHttpClient(),
                provideHttpClientTesting(),
            ]
        });
        service = TestBed.inject(ApiService);
        httpCtrl = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it("should retrieve pokemon list", () => {
        const name = "Pokemon Teste Unitario";
        let pokemonId = 1;
        service.getPokemonDetails(pokemonId)
        .then(x => {
            expect(x).toBeTruthy();
            expect(x.name).toBe(name);
        });

        let req = httpCtrl.expectOne(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
        expect(req.request.method).toBe("GET");

        let pk = new Pokemon();
        pk.id = '1';
        pk.name = name;

        req.flush(pk)
    })
});
