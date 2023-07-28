import { Component, Output, EventEmitter } from '@angular/core';
import { Itodo } from '@src/app/models/todo';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html'
})
export class ControlsComponent {
  newTodoText = '';

  @Output() createTodoEvent = new EventEmitter<Itodo['text']>()

  onCreateClick() {
    this.createTodoEvent.emit(this.newTodoText)
    this.newTodoText = ''
  }
}
