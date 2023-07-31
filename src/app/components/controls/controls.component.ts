import { Component, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Itodo } from '@src/app/models/todo';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html'
})
export class ControlsComponent implements AfterViewInit {
  newTodoText = '';

  @ViewChild('todoInput') todoInput: ElementRef;
  @Output() createTodoEvent = new EventEmitter<Itodo['text']>()

  ngAfterViewInit() {
    this.todoInput.nativeElement.focus();
  }

  onCreateClick() {
    this.createTodoEvent.emit(this.newTodoText)
    this.newTodoText = ''
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.onCreateClick()
    }
  }
}
