/*
  author:       Carlos Pisani
  date:         april, 21, 2017
  description:  this is a simple fearure toggle application example.
*/

import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { TgRouterService } from '../tg-router.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  /* constructors */
  constructor(private _todoService : TodoService, private _tgRouterService : TgRouterService) {}
  
  /* properties */
  resolve = this._tgRouterService.resolve;
  todos;
  text;
  user;
    
  /* façade */
  facade = {
    toggle:{

      getOnDatabase: () => {
        if (this.resolve("tg-get-on-database",this.user))
        { 
          this.todos = this._todoService.getTodos();
        }
        else
        {
          //Código original
          if (this.todos==="" || this.todos===null || this.todos===undefined)
              this.todos = [
                {text : "Fazer compras"},
                {text : "Estudar matemática"},
                {text : "Carregar a furadeira elétrica"},
                {text : "Levar o cachorro para passear"}
              ];
        }
      },

      setOnDatabase: (val) =>{
        if (this.resolve("tg-set-on-database",this.user)) 
        {
          this._todoService.setTodos(val);
          this.facade.toggle.getOnDatabase();
        }
        else
        {
          //Código original, perceba que nem mesmo a variável "val" foi usada 
          //para manter o código original o mais próximo possível 
          this.todos.push({text:this.text});
        }
      },

      delOnDatabase: (val) =>{
        if (this.resolve("tg-del-on-database",this.user)) 
        {
          this.todos = this._todoService.deleteTodo(val);
          this.facade.toggle.getOnDatabase();
        }
        else
        {
          //Código original, neste caso "val" seria utilizado de qualquer forma
          //por isso recebeu itemText do valor original
          for (var i=0; i<this.todos.length; i++){
            if (this.todos[i].text==val){
              this.todos.splice(i,1);
            }
          }
        }
      }

    }
  }

  /* methods */
  ngOnInit() {
    this.text = "";
    this.user = "";
   
    //o código original foi para o ELSE do método abaixo
    this.facade.toggle.getOnDatabase();
  }

  changeUser(){
    //o código original foi para o ELSE do método abaixo
    this.facade.toggle.getOnDatabase();
  }

  addNew(){
    //o código original foi para o ELSE do método abaixo
    this.facade.toggle.setOnDatabase(this.text);
    
    this.text = "";
  }

  deleteItem(itemText){
    //o código original foi para o ELSE do método abaixo
    this.facade.toggle.delOnDatabase(itemText);
  }
}
