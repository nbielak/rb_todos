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
            <div onClick={this.handleClick}>
                <div>{this.props.user.username}</div>
                <div>{this.props.user.name}</div>
                <div>{this.props.user.company.name}</div>
            </div>
        )
    }
}

export default withRouter(UserIndexItem);