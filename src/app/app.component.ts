import { Component, OnInit } from '@angular/core';
import { Itodo } from './models/todo';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'angular-todo-list';
  headerTitle = 'Todo List';
  todos: Itodo[] = []

  constructor(private todoService: TodoService) {
    this.todos = todoService.getTodos();
  }

  ngOnInit() {
    this.todoService.todos$.subscribe((todos) => {
      this.todos = todos;
    })
  }

  createTodo(todoText: Itodo['text']) {
    this.todoService.createTodo(todoText)
  }

  removeTodo(todoId: Itodo['id']) {
    this.todoService.removeTodo(todoId);
  }

  toggleTodo(todoId: Itodo['id']) {
    this.todoService.toggleTodo(todoId);
  }
}
