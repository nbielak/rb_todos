import React from 'react';

class ShowTodo extends React.Component {
    constructor(props) {
        super(props);
        this.completed = this.completed.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchTodo(this.props.match.params.todoId)
            .then(action => this.props.fetchUser(action.todo.userId))
            .then(action => {
                this.setState({user: action.user})
            }
        )
    }

    completed() {
        return this.props.todo.completed ? "Completed" : "Incomplete";
    }

    render() {
        if (!this.props.todo || !this.props.user || Object.keys(this.props.user).length < 1 || this.props.user.id !== this.props.todo.userId) {
            return null;
        }

        return(
            <div className="todo-show">
                <div className="todo-info">
                    <div className="page-header-wrapper">
                        <h1>{this.props.todo.title}</h1>
                    </div>

                    <div className="info-list">
                        <div className="info-list-item">
                            {this.props.user.username}
                        </div>

                        <div className="info-list-item">
                            {this.completed()}
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default ShowTodo;