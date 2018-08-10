import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../classes/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
  // ,
  // providers: [TodoService] <---Solo va en el modulo
})
export class TodoItemComponent implements OnInit {

  @Input() todo: ToDo;
  @Output() todoClick: EventEmitter<ToDo> = new EventEmitter<ToDo>();
  constructor( private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.greeting();
  }

  todoClicked() {
    // this.todoClick.emit(this.todo);
    this.todoService.changeActiveStatus(this.todo);
    console.log('todo-Item', this.todoService.getToDos());
    
  }

}
