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
    if (localStorage.getItem('todos')===null || localStorage.getItem('todos')===undefined){
      var values = [];
      localStorage.setItem('todos',JSON.stringify(values));
    }
  }

  /* methods */
  getTodos(){
    return JSON.parse(localStorage.getItem('todos'));
  }

  setTodos(name){
    var data = JSON.parse(localStorage.getItem('todos'));
    data.push({text:name});
    localStorage.setItem('todos',JSON.stringify(data));
  }

  deleteTodo(name){
    var data = JSON.parse(localStorage.getItem('todos'));

    for (var i=0; i< data.length; i++){
      if (data[i].text==name){
        data.splice(i,1);
      }
    }

    localStorage.setItem('todos',JSON.stringify(data));
  }
}
