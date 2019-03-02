import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from '../../Model/Personne';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  @Input() personnes: Personne[];
  @Output() sendPersonne = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  getSelectedPersonne(personne) {
    this.sendPersonne.emit(
      personne
    );
  }

}
