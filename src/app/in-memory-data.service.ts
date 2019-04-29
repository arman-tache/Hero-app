import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Kshitij' },
      { id: 12, name: 'Vinay' },
      { id: 13, name: 'Mr.Arman' },
      { id: 14, name: 'Vishrut' },
      { id: 15, name: 'Abhinav' },
      { id: 16, name: 'Bhupinder' },
      { id: 17, name: 'Saurav' },
      { id: 18, name: 'Ravinder' },
      { id: 19, name: 'Ankit' },
      { id: 20, name: 'Ahzam' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}