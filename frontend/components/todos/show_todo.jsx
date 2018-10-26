import React from 'react';

class ShowTodo extends React.Component {
    constructor(props) {
        super(props);
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

    render() {
        if (!this.props.todo || !this.props.user) {
            return null;
        }

        return(
            <div>
                {this.props.todo.title}
                <div>
                    {this.props.user.name}
                </div>
            </div>
        )
    }
}

export default ShowTodo;