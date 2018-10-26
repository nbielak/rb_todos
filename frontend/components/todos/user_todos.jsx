import React from 'react';
import TodoIndexItem from './todo_index_item';

class UserTodos extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (Object.keys(this.props.user) === [] || Object.keys(this.props.todos) === []) {
            return null;
        }
        let user = {[this.props.user.id]: this.props.user};
        return (
            <div>
                <ul>
                    {Object.keys(this.props.todos).map(todoId => {
                        let todo = this.props.todos[todoId];
                        return <TodoIndexItem key={todo.id} todo={todo} userId={todo.userId} users={user} />;
                    })}
                </ul>
            </div>
        )
    }
}

export default UserTodos;