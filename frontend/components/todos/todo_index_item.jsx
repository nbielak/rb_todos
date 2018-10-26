import React from 'react';
import { withRouter } from "react-router-dom";

class TodoIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.getUsername = this.getUsername.bind(this);
    }

    getUsername() {
        // debugger;
        let user = this.props.users[this.props.userId];
        console.log(user);
        return (user.name);
    }

    render() {
        if (!this.props.userId || Object.keys(this.props.users).length === 0) {
            return null;
        }
        let username = this.props.users[this.props.userId - 1].username
        console.log(this.props);
        return (
            <div>
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

// const todoIndexItem = ({todo, userId, users}) => {
//     return (
//         <div>
//             <ul>
//                 <li>
//                     {todo.title}
//                 </li>
//                 <li>
//                     {users[userId].username}
//                 </li>
//                 <li>
//                     {todo.completed}
//                 </li>
//             </ul>
//         </div>
//     );
// }

// get todo user

export default TodoIndexItem;