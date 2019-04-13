import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from '../../Model/Personne';
import {CvService} from '../cv.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() personne: Personne;
  @Output() selectPersonne = new EventEmitter();
  constructor(
    private cvService: CvService
  ) { }

  ngOnInit() {
  }
  sendData() {
    this.selectPersonne.emit(
      this.personne
    );
  }
  deletePersonne() {
    this.cvService.deletePersonne(this.personne);
  }

}
