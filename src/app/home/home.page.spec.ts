import { ComponentFixture, fakeAsync, flush, TestBed } from '@angular/core/testing';
import { IonicModule, LoadingController } from '@ionic/angular';

import { HomePage } from './home.page';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ApiService } from '../services/api.service';
import { of } from 'rxjs';
import { Pokemon } from '../models/Pokemon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavPokemonService } from '../services/fav-pokemon.service';
import { By } from '@angular/platform-browser';
import { PokemonCardComponent } from '../components/pokemon-card/pokemon-card.component';
import { AbilitiesPipe } from '../pipes/abilities.pipe';
import { CapitalizePipe } from '../pipes/capitalize.pipe';
import { StylePokemonIdPipe } from '../pipes/style-pokemon-id.pipe';

fdescribe('HomePage', () => {
    let component: HomePage;
    let fixture: ComponentFixture<HomePage>;
    let spyPokemonApiService: any;
    let spyLoadingCtrl: any;

    const loadingMock = {
        present: jasmine.createSpy('present'),
        dismiss: jasmine.createSpy('dismiss')
    };

    spyLoadingCtrl = jasmine.createSpyObj('LoadingController', ['create']);
    spyLoadingCtrl.create.and.returnValue(Promise.resolve(loadingMock));

    beforeEach(async () => {
        spyPokemonApiService = jasmine.createSpyObj("ApiService", ["listPokemons"]);
        await TestBed.configureTestingModule({
            declarations: [HomePage, PokemonCardComponent],
            imports: [IonicModule.forRoot(), FormsModule, ReactiveFormsModule, AbilitiesPipe, CapitalizePipe, StylePokemonIdPipe],
            providers: [
                provideHttpClient(),
                provideHttpClientTesting(),
                {
                    provide: ApiService,
                    useValue: spyPokemonApiService
                },
                { provide: LoadingController, useValue: spyLoadingCtrl },
                { provide: FavPokemonService, useValue: { retriveFavs: () => [] } }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(HomePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it("should show pokemons", fakeAsync(() => {
        let pokemon = new Pokemon();
        pokemon.name = "teste";
        pokemon.id = "1";
        pokemon.types = [
            {
                type: {
                    name: "teste type",
                    url: ""
                }
            }
        ]
        spyPokemonApiService.listPokemons.and.returnValue(Promise.resolve([
            pokemon,
            pokemon
        ]));
        component.ngOnInit();
        fixture.detectChanges();
        flush();
        fixture.detectChanges();
        expect(component.pokemons?.length).toBeGreaterThan(0);

        let res = fixture.debugElement.query(By.css(".pokemon-container"));
        
        expect(res).toBeTruthy();

    }));
});
