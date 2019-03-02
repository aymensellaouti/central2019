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
}
