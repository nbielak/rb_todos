import React from 'react';
import UserTodos from "../todos/user_todos";
import UserInfo from "./user_info";

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
            <div className="index-page">
                <div className="page-header-wrapper">
                    <h1>{this.props.user.username}</h1>
                </div>

                <div className="todo-info">
                    <UserInfo user={this.props.user}/>
                </div>
                
                <div>
                    <div className="page-header-wrapper">
                        <h2>{this.props.user.username}'s Todos</h2>
                    </div>
                    <div className="index-wrapper">
                        <UserTodos todos={this.props.todos} user={this.props.user} />
                    </div>
                </div>
            </div>
        );
    }
}

export default UserShow;