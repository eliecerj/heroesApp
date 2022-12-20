import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../heroe/interfaces/heroes.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {
  term: string = '';
  heroes: Heroe[] = [];
  selectedHeroe!: Heroe | null;
  notFound: boolean = false;

  constructor( private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  searching() {
    this.heroesService.getSuggestion(this.term)
      .subscribe( heroes => this.heroes = heroes
      );
  }

  selectedOption(event: MatAutocompleteSelectedEvent) {
    if(!event.option.value) {
      this.selectedHeroe = null;
      return;
    }
    const heroe: Heroe = event.option.value;
    this.term = heroe.superhero;

    this.heroesService.getHeroeById(heroe.id!)
      .subscribe(heroe => this.selectedHeroe = heroe);    
  }
}
