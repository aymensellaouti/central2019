import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-carte',
  templateUrl: './liste-carte.component.html',
  styleUrls: ['./liste-carte.component.css']
})
export class ListeCarteComponent implements OnInit {
  color = 'lightblue';
  content = `Etat d'alerte`;
  constructor() { }
  ngOnInit() {
  }
  processSonData(data) {
    alert(data);
  }
}
