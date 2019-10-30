/*
  author:       Carlos Pisani
  date:         april, 21, 2017
  description:  todo application persistent back-end.
*/

import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
  /* constructors */
  constructor() {
    if (
      localStorage.getItem('todos') === null ||
      localStorage.getItem('todos') === undefined
    ) {
      const values = [];
      localStorage.setItem('todos', JSON.stringify(values));
    }
  }

  /* methods */
  getTodos() {
    return JSON.parse(localStorage.getItem('todos'));
  }

  setTodos(name: string) {
    const data = JSON.parse(localStorage.getItem('todos'));
    data.push({ text: name });
    localStorage.setItem('todos', JSON.stringify(data));
  }

  deleteTodo(name: string) {
    const data = JSON.parse(localStorage.getItem('todos'));
    const index = data.findIndex((x: { name: any }) => x.name === name);
    if (index > -1) {
      data.splice(index, 1);
    }

    localStorage.setItem('todos', JSON.stringify(data));
  }
}
