import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {CvService} from '../cv.service';

@Component({
  selector: 'app-add-personne',
  templateUrl: './add-personne.component.html',
  styleUrls: ['./add-personne.component.css']
})
export class AddPersonneComponent implements OnInit {

  constructor(
    private cvService: CvService
  ) { }

  ngOnInit() {
  }

  addPersonne(formulaire: NgForm) {
    this.cvService.addPersonne(formulaire.value);
  }

}
