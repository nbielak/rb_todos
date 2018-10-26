import { combineReducers } from 'redux';
import TodosReducer from './todos_reducer';
import UsersReducer from './users_reducer';

const entitiesReducer = combineReducers({
    todos: TodosReducer,
    users: UsersReducer
});

export default entitiesReducer;
