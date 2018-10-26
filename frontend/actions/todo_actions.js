import * as TodoApiUtil from '../util/todo_api_util.js';

export const RECEIVE_ALL_TODOS = "RECEIVE_ALL_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";

const receiveAllTodos = todos => ({
    type: RECEIVE_ALL_TODOS,
    todos
});

const receiveTodo = todo => ({
    type: RECEIVE_TODO,
    todo
});

export const fetchAllTodos = () => dispatch => (
    TodoApiUtil.fetchAllTodos().then(
        todos => dispatch(receiveAllTodos(todos))
    )
);

export const fetchTodo = todoId => dispatch => (
    TodoApiUtil.fetchTodo(todoId).then(
        todo => dispatch(receiveTodo(todo))
    )
);

export const createTodo = todo => dispatch => (
    TodoApiUtil.createTodo(todo).then(
        todo => dispatch(receiveTodo(todo))
    )
);

export const fetchUserTodos = userId => dispatch => (
    TodoApiUtil.fetchUserTodos(userId).then(
        todos => dispatch(receiveAllTodos(todos))
    )
);