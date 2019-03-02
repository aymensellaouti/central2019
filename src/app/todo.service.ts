import { Injectable } from '@angular/core';
import {Todo} from './Model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[];
  constructor() {
    this.todos = [];
  }
  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index >= 0 ) {
      this.todos.splice(index, 1);
    }
  }
  getTodos() {
    return this.todos;
  }
  logTodos() {
    console.log(this.todos);
  }
}
