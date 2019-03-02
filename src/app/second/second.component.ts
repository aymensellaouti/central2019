import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  @Input() contenu = 'Bonjour composant second';
  constructor() { }

  ngOnInit() {
  }

}
