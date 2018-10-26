import {RECEIVE_ALL_USERS, RECEIVE_USER} from '../actions/user_actions';
import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_USERS:
            let users_obj = {};
            action.users.forEach(user => {
                users_obj[user.id] = user
            })
            return users_obj;
        case RECEIVE_USER:
            let newUser = {[action.user.id]: action.user}
            return merge({}, state, newUser);
        default:
            return state;
    }
};

export default usersReducer;