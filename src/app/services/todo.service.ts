import { ToDo } from "../classes/todo";
import { Subject } from "rxjs";

export class TodoService {
    
    private _todos = [
        {id: 1, active: true, name: "Create a acomponent"},
        {id: 2, active: true, name: "Create a service"},
        {id: 3, active: true, name: "use the service"}
    ];

    private todo$ = new Subject<Array<ToDo>>();

    getToDos() : Array<ToDo>{
        // return [... this._todos];
        return this._todos.map(a => ({ ... a }));
    }

    greeting():void{
        console.log('Hello from service');
    }

    changeActiveStatus(todo: ToDo) {
        this._todos = this._todos.map(t => {
          if (t.id === todo.id) {
            t.active = !t.active;
          }
          return t;
        });
        // this.todo$.next(this._todos);
        console.log(this.getToDos());
        this.todo$.next(this.getToDos());   
    
    }

    todosSubscribe(){
        return this.todo$.asObservable();
    }
}

