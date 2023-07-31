import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Itodo } from '../models/todo';
import localStorage from '../localStorage';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Itodo[] = [];
  private todosSubject = new Subject<Itodo[]>();

  constructor() {
    this.todos = localStorage.getTodos() ?? []
  }

  todos$ = this.todosSubject.asObservable();

  private notifyChanges(): void {
    this.todosSubject.next(this.todos);
    localStorage.setTodos(this.todos);
  }

  getTodos(): Itodo[] {
    return this.todos;
  }

  setTodos(todos: Itodo[]) {
    this.todos = todos
  }

  createTodo(todoText: Itodo['text']) {
    if (todoText.trim() === '') return;

    const newTodo: Itodo = {
      id: Date.now(),
      text: todoText,
      isCompleted: false
    };

    this.todos.push(newTodo);
    this.notifyChanges();
  }

  removeTodo(todoId: Itodo['id']) {
    this.todos = this.todos.filter(({ id }) => id !== todoId);
    this.notifyChanges();
  }

  toggleTodo(todoId: Itodo['id']) {
    this.todos = this.todos.map((todo) => {
      return todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted} : todo
    })
    this.notifyChanges();
  }
}
