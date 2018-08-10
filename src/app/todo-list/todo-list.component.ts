import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../classes/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
  // ,
  // providers: [TodoService] <---Solo va en el modulo
})
export class TodoListComponent implements OnInit {
 
  // @Input() todos: Array<ToDo>;
  private todos;
  @Output() todoClicked: EventEmitter<ToDo> = new EventEmitter<ToDo>();

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getToDos();
   }

  ngOnInit() {
   this.todos = this.todoService.getToDos();
  
   this.todoService.todosSubscribe().subscribe((todos) => {
     console.log(todos);
     this.todos = todos;
   });
  }

  handleTodoClicked(todo: ToDo) {
    this.todoService.changeActiveStatus(todo);
    this.todos = this.todoService.getToDos();// <---sin esta linea, los console.log de abajo serian diferentes,
    //con esta linea, lo que hacemos es igualarlos (lo de la aplicacion a el componente )
    
    console.log('componente', this.todos);
    console.log('aplicacion', this.todoService.getToDos())
  }

}
