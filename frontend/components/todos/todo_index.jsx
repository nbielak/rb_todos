import React from 'react';
import TodoIndexItem from './todo_index_item';

class TodoIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchAllTodos()
            .then(action => this.setState({todos: action.todos}))
            .then(res => this.props.fetchAllUsers())
            .then(action => this.setState({users: action.users}))
    }

    render() {
        if (Object.keys(this.props.todos).length === 0 || Object.keys(this.props.users) === []) {
            return null;
        }
        let users = this.props.users;
        return (
            <div className="index-page">
                <div className="page-header-wrapper">
                    <h1>Todos</h1>
                </div>
                <div className="index-wrapper">
                    {Object.keys(this.props.todos).map(todoId => {
                        let todo = this.props.todos[todoId];
                        return (<TodoIndexItem key={todo.id} todo={todo} userId={todo.userId} users={users} />)
                    })}
                </div>
            </div>
        );

    }
}

export default TodoIndex;