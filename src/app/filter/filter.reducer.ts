import * as fromFiltro from './filter.actions'
import { acciones, SET_FILTO } from './filter.actions';

const estadoInicial: fromFiltro.filtrosValidos = 'todos';


export function filtroReducer (state = estadoInicial, action: fromFiltro.acciones): fromFiltro.filtrosValidos {

    switch(action.type){
        case SET_FILTO:
            return action.filtro;
        
        default:
            return state;

    }

}