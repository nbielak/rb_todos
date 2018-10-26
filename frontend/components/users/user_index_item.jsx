import React from 'react';
import {withRouter} from 'react-router-dom';

class UserIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.history.push(`/users/${this.props.user.id}`)
    }

    render() {
        if (!this.props.user) {
            return null
        }
        return (
            <div className="todo-index-item" onClick={this.handleClick}>
                <div className="item-title-wrapper">
                    {this.props.user.username}
                </div>
                <ul className="info-list">
                    <li className="info-list-item">
                        {this.props.user.name}
                    </li>
                    <li className="info-list-item">
                        {this.props.user.company.name}
                    </li>
                </ul>
            </div>
        )
    }
}

export default withRouter(UserIndexItem);