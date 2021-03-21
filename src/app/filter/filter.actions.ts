import { Action } from "@ngrx/store";




export const SET_FILTO = ' [Filter] Set Filtro'

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';



export class SetFiltroACtion implements Action {
    readonly type = SET_FILTO;

    constructor(public filtro: filtrosValidos){

    }

}

export type acciones = SetFiltroACtion;