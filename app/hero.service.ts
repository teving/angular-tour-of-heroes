import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
   getHeroes(): Promise<Hero[]> {
      return new Promise(resolve => {
         setTimeout(() => resolve(HEROES), Math.random() * 2000);
      });
   }

   getHero(id: number): Promise<Hero> {
      return this.getHeroes()
                  .then(heroes => heroes.find(hero => hero.id === id));
   }
}
