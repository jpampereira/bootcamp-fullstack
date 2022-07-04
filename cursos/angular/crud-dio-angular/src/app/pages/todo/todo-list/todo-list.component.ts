import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Array<Todo> = [];

  constructor() { }

  ngOnInit(): void {
    this.todos = JSON.parse(localStorage.getItem('todos') || '[]');
  }

  addTodo(title: string): void {
    const id = this.todos.length > 0 ? this.todos[this.todos.length-1].id + 1 : 1;
    this.todos.push({ id, title, done: false });

    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  removeTodo(id: number): void {
    const index = this.todos.findIndex(todo => todo.id === id);

    if (index !== -1) {
      this.todos.splice(index, 1);
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }
}