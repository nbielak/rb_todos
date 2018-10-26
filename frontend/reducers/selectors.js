export const selectUser = users => {
    let keys = Object.keys(users);
    return users[keys[0]];
}

export const getUserTodos = (todos, userId) => {
    let todoIds = Object.keys(todos);
    const result = [];

    for (let i = 0; i < todoIds.length; i++) {
        let todo = todos[todoIds[i]];
        if (todo.userId === userId) {result.push(todo)};
    }
    return result;
}