import { Component, OnInit} from '@angular/core';
import { ToDo } from './classes/todo';
import { TodoService } from './services/todo.service';
import { interval, Observable } from '../../node_modules/rxjs';
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  // private todos: Array<ToDo>;
  constructor(private todoService: TodoService) {
  }

  ngOnInit(){
    const num = interval(1000);
    const pair = filter<number>((n) => n % 2 == 0);

    //crear un obserbable:
    // const customObs = new Observable((observer) =>{
    //   observer.next('hola desde Observable');
    //   setInterval(() => observer.next('Hola de nuevo'), 500);
    // });
    // customObs.subscribe(console.log, (error) => console.log('Error', error));
  }
  // changeActiveStatus(todo: ToDo) {
  //   this.todos = this.todos.map(t => {
  //     if (t.id === todo.id) {
  //       t.active = !t.active;
  //     }
  //     return t;
  //   });
  // }
}
