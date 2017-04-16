//import axios from 'axios';

export const PENCIL_MOVED = 'PENCIL_MOVED';
export const COLOR_CHANGED = 'COLOR_CHANGED';
export const BRUSH_CHANGED = 'BRUSH_CHANGED';

export function pencil_moved(x, y){
    return{
        type: PENCIL_MOVED,
        x,
        y,       
    }
}
export function color_changed(color){
    return{
        type: COLOR_CHANGED,
        color
    }
}
export function brush_changed(brush_type){
    return{
        type: BRUSH_CHANGED,
        brush_type
    }
}
