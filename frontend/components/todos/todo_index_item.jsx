import React from 'react';
import { withRouter } from "react-router-dom";

class TodoIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.completed = this.completed.bind(this);
    }

    handleClick(e) {
        this.props.history.push(`/todos/${this.props.todo.id}`)
    }

    completed() {
        return this.props.todo.completed ? "Completed" : "Incomplete"
    }

    render() {
        if (!this.props.users[this.props.userId]) {
          return null;
        }

        let username = this.props.users[this.props.userId].username;
        return (
            <div className="todo-index-item" onClick={this.handleClick}>
                <div >
                    <div className="item-title-wrapper">
                        {this.props.todo.title}
                    </div>
                    <ul className="info-list">
                        <li className="info-list-item">
                            {username}
                        </li>
                        <li className="info-list-item">
                            {this.completed()}
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default withRouter(TodoIndexItem);