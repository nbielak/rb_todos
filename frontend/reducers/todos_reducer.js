import { RECEIVE_ALL_TODOS, RECEIVE_TODO } from '../actions/todo_actions';
import merge from 'lodash/merge';

//slice of state not resetting, doesn't like resetting

const todosReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_TODOS:
            return action.todos;
        case RECEIVE_TODO:
            let newTodo = {[action.todo.id]: action.todo};
            return merge({}, state, newTodo);
        default:
            return state;
    }
};

export default todosReducer;