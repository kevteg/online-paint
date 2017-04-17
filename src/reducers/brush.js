import {BRUSH_CHANGED} from '../actions/index'

export default function(state = null, action){
    console.log('Action received', action);
    switch(action.type){
        case BRUSH_CHANGED:
            //No se puede modificar directamente el state, en NINGÚN CASO
            return action.brush_type;
    }    
    return state;
}
