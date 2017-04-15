import {PENCIL_MOVED} from '../actions/index'

export default function(state = [], action){
    console.log('Action received', action);
    switch(action.type){
        case PENCIL_MOVED:
            //No se puede modificar directamente el state, en NINGÚN CASO
            return [ action.x, action.y ];
    }    
    return state;
}
