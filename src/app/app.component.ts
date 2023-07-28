import { Component, OnInit } from '@angular/core';
import { Itodo } from './models/todo';
import { TodoService } from './services/todo.service';
import localStorage from './localStorage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'angular-todo-list';
  headerTitle = 'Todo List';
  todos: Itodo[] = []

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    const todos = localStorage.getTodos() ?? this.todoService.getTodos();
    this.todos = todos;
    this.todoService.setTodos(todos)
  }

  createTodo(todoText: Itodo['text']) {
    this.todoService.createTodo(todoText)
    this.todos = this.todoService.getTodos();
  }

  removeTodo(todoId: Itodo['id']) {
    this.todoService.removeTodo(todoId);
    this.todos = this.todoService.getTodos();
  }

  toggleTodo(todoId: Itodo['id']) {
    this.todoService.toggleTodo(todoId);
    // this.todos = this.todoService.getTodos();
  }
}
