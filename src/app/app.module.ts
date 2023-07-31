import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from '@src/app/app.component';
import { HeaderComponent } from '@src/app/components/header/header.component';
import { ControlsComponent } from './components/controls/controls.component';
import { TodoComponent } from './components/todo/todo.component';
import { CounterComponent } from './components/counter/counter.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ControlsComponent,
    TodoComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
