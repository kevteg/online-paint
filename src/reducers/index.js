import {combineReducers} from 'redux';
import pencil_pos from './pencil';
import color_chan from './color';
import brush_chan from './brush';

const rootReducer = combineReducers({
    pencil: pencil_pos,
    color: color_chan,
    brush: brush_chan
});

export default rootReducer;
