import { Injectable } from '@angular/core';
import { Itodo } from '../models/todo';
import localStorage from '../localStorage';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Itodo[] = [];

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
    localStorage.setTodos(this.todos);
  }

  removeTodo(todoId: Itodo['id']) {
    this.todos = this.todos.filter(({ id }) => id !== todoId);
    localStorage.setTodos(this.todos);
  }

  toggleTodo(todoId: Itodo['id']) {
    this.todos = this.todos.map((todo) => {
      return todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted} : todo
    })

    localStorage.setTodos(this.todos);
  }
}
