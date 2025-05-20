import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos',
  imports: [CommonModule, FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {

  todos!: Todo[];

  inputTodo:string = "";

  constructor() {}

  ngOnInit(): void {
      this.todos = [
        {
          content: 'First to do',
          completed: false

        },
        {
          content: 'Second to do',
          completed: true
        }
      ]
  }


  toggleDone (id: number){
    this.todos.map((v, i)=>{
      if (i == id) v.completed = !v.completed;

      return v;
    })
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo () {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    })

    this.inputTodo = "";
  }

}