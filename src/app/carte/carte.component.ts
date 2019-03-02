import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {
  @Input() couleur = 'lightgreen';
  @Input() contenu = 'Default content';
  MyOldColor = 'blue';
  @Output() filsEvent = new EventEmitter();
  constructor() { }
  ngOnInit() {
  }
  sendDataToParent() {
    this.filsEvent.emit(
      this.MyOldColor
    );
  }
}
