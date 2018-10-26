import { combineReducers } from 'redux';
import EntitiesReducer from './entities_reducer';

const rootReducer = combineReducers({
    entities: EntitiesReducer
});

export default rootReducer;