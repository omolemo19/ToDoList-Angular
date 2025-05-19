import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todos',
  imports: [CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {

  todos!: Todo[];

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

}
