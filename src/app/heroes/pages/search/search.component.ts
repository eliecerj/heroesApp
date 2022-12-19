import { Component, OnInit } from '@angular/core';
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

  constructor( private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  searching() {
    this.heroesService.getHeroes()
      .subscribe( heroes => this.heroes = heroes);
  }

}
