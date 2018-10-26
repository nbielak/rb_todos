import React from 'react';
import { withRouter } from "react-router-dom";

class TodoIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.history.push(`/todos/${this.props.todo.id}`)
    }

    render() {
        if (!this.props.userId || Object.keys(this.props.users).length === 0) {
            return null;
        }
        let username = this.props.users[this.props.userId].username
        return (
            <div onClick={this.handleClick}>
                <ul>
                    <li>
                        {this.props.todo.title}
                    </li>
                    <li>
                        {username}
                    </li>
                    <li>
                        {this.props.todo.completed}
                    </li>
                </ul>
            </div>
        );
    }
}

export default withRouter(TodoIndexItem);