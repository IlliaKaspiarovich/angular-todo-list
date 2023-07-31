import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from '@src/app/services/todo.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit {
  all: number
  inProgress: number
  completed: number

  constructor(private todoService: TodoService) {
    const todos = todoService.getTodos()
    this.all = todos.length
    this.completed = todos.filter(({ isCompleted }) => isCompleted).length
    this.inProgress = this.all - this.completed
  }
  
  ngOnInit(): void {
    this.todoService.todos$.subscribe((todos) => {
      this.all = todos.length
      this.completed = todos.filter(({ isCompleted }) => isCompleted).length
      this.inProgress = this.all - this.completed
    })
  }
}
