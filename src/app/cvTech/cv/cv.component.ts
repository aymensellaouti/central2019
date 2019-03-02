import { Component, OnInit } from '@angular/core';
import {Personne} from '../../Model/Personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  personnes: Personne[];
  constructor() { }

  ngOnInit() {
    this.personnes = [
      new Personne(1, 'sellaouti',
        'aymen', 36, 12345678, 'teacher', 'as.jpg'),
      new Personne(2, 'test',
        'test', 24, 5555678, 'test', 'rotating_card_profile2.png')
    ];
  }

}
