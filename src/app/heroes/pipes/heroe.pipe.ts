import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../pages/heroe/interfaces/heroes.interface';

@Pipe({
  name: 'heroe_image'
})
export class HeroePipe implements PipeTransform {

  transform(heroe: Heroe): string {
    return `assets/heroes/${heroe?.id}.jpg` || "";
  }

}
