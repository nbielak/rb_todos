import $ from 'jquery';

export const fetchAllUsers = () => (
    $.ajax({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users'
    })
);

export const fetchUser = userId => (
    $.ajax({
        method: 'GET',
        url: `https://jsonplaceholder.typicode.com/users/${userId}`
    })
);
