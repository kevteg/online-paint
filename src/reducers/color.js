import {COLOR_CHANGED} from '../actions/index'

export default function(state = [], action){
    console.log('Action received', action);
    switch(action.type){
        case COLOR_CHANGED:
            //No se puede modificar directamente el state, en NINGÚN CASO
            return [ action.color];
    }    
    return state;
}
