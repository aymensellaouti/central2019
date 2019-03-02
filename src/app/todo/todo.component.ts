import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';
import {Todo} from '../Model/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  todos: Todo[];
  name = '';
  content = '';
  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
    console.log(this.todos);
  }
  addTodo() {
    const todo = new Todo(this.name, this.content);
    this.todoService.addTodo(todo);
    this.name = '';
    this.content = '';
  }

}
