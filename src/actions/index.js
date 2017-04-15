//import axios from 'axios';

export const PENCIL_MOVED = 'PENCIL_MOVED';

export function pencil_moved(x, y){
    return{
        type: PENCIL_MOVED,
        x,
        y
    }
}
