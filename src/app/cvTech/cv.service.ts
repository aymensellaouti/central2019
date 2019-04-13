import { Injectable } from '@angular/core';
import {Personne} from '../Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  personnes: Personne[];
  constructor() {
    this.personnes = [
      new Personne(1, 'sellaouti',
        'aymen', 36, 12345678, 'teacher', 'as.jpg'),
      new Personne(2, 'test',
        'test', 24, 5555678, 'test', 'rotating_card_profile2.png'),
    ];
  }
  getPersonnes() {
    return this.personnes;
  }
  addPersonne(personne: Personne) {
   this.personnes.push(personne);
  }
  deletePersonne(personne: Personne) {
    const index = this.personnes.indexOf(personne);
    if ( index >= 0 ) {
      this.personnes.splice(index, 1);
    } else {
      alert ('personne innexistante');
    }
  }
}
