import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Itodo } from '@src/app/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent {
  @Input() todoItem: Itodo
  @Output() removeTodoEvent = new EventEmitter<Itodo['id']>();
  @Output() toggleTodoEvent = new EventEmitter<Itodo['id']>();

  onDeleteClick() {
    this.removeTodoEvent.emit(this.todoItem.id);
  }

  onCheckboxChange() {
    this.toggleTodoEvent.emit(this.todoItem.id)
  }
}
