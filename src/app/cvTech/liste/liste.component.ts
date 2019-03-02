import {Component, Input, OnInit} from '@angular/core';
import {Personne} from '../../Model/Personne';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  @Input() personnes: Personne[];
  constructor() { }

  ngOnInit() {
  }

}
