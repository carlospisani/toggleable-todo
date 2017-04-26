/*
  author:       Carlos Pisani
  date:         april, 21, 2017
  description:  todo component definitions.
*/

import { Component } from '@angular/core';
import { TodosComponent } from './todos/todos.component';
import { TodoService } from './todo.service';
import { TgRouterService } from './tg-router.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents: [TodosComponent],
  providers:[TodoService,TgRouterService]
})
export class AppComponent {
  title = 'TODO APP';
}
