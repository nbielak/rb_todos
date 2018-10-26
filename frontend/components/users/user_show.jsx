import React from 'react';
import UserTodos from "../todos/user_todos";

class UserShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchUser(this.props.match.params.userId)
            .then(action => this.props.fetchUserTodos(this.props.match.params.userId))
            // .then(action => this.setState({todos: action.todos}))
    }

    render() {
        if (!this.props.user || this.props.todos === []) {
            return null;
        }
        
        return (
            <div>
                <p>{this.props.user.name}</p> 
                <UserTodos todos={this.props.todos} user={this.props.user} />
            </div>
        );
    }
}

export default UserShow;