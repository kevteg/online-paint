import {combineReducers} from 'redux';
import pencil_pos from './pencil';


const rootReducer = combineReducers({
    pencil: pencil_pos
});

export default rootReducer;
