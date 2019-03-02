import { Injectable } from '@angular/core';
import {Personne} from './Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  embauches: Personne[];
  constructor() {
    this.embauches = [];
  }
  getEmbauches() {
    return this.embauches;
  }
  embaucher(personne: Personne) {
    this.embauches.push(personne);
  }
}
