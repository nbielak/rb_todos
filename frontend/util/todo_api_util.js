import $ from 'jquery';

export const fetchAllTodos = () => (
    $.ajax ({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/todos/'
    })
);

export const fetchTodo = todoId => (
    $.ajax ({
        method: 'GET',
        url: `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    })
);

export const createTodo = todo => (
    $.ajax ({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/todos/',
        data: { todo }
    })
);