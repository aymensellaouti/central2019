import { Component, OnInit } from '@angular/core';
import {Personne} from '../../Model/Personne';
import {TodoService} from '../../todo.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  selectedPersonne: Personne;
  personnes: Personne[];
  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
  }

  getSelectedPersonne(personne) {
    this.todoService.logTodos();
    this.selectedPersonne = personne;
  }

}
