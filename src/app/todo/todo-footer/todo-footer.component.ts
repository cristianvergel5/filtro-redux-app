import { Component, OnInit } from '@angular/core';
import * as fromTodo from '../todo.actions'

import * as fromFiltro from '../../filter/filter.actions';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { Todo } from '../model/todo.model';
import { BorrarAllAction } from '../todo.actions';
@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: [
  ]
})
export class TodoFooterComponent implements OnInit {
  
  pendientes: number;
  
  filtrosValidos: fromFiltro.filtrosValidos[] = ['todos', 'completados', 'pendientes'] ;
  filtroActual: fromFiltro.filtrosValidos;



  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.subscribe(state => {
      this.contarPendientes(state.todos);
      this.filtroActual = state.filtro;
    });
  }

  cambiarFiltro(nuevoFiltro: fromFiltro.filtrosValidos){
    
    const accion = new fromFiltro.SetFiltroACtion(nuevoFiltro);
    this.store.dispatch(accion);
    
  }

  contarPendientes(todos: Todo[]){
    this.pendientes = todos.filter(todo => !todo.completado).length;

  }

  borrarTodo(){
    const accion = new fromTodo.BorrarAllAction();
    this.store.dispatch(accion);
    

  }

}
