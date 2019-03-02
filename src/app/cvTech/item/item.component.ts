import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from '../../Model/Personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() personne: Personne;
  @Output() selectPersonne = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  sendData() {
    this.selectPersonne.emit(
      this.personne
    );
  }

}
