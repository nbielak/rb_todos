import React from 'react';
import UserIndexItem from './user_index_item';

class UserIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchAllUsers();
    }

    render() {
        if (Object.keys(this.props.users) === []) {
            return null;
        }
        return (
            <div className="index-page">
                <div className="page-header-wrapper">
                    <h1>Users</h1>
                </div>
                <div className="index-wrapper">
                    {Object.keys(this.props.users).map(userId => {
                        let user = this.props.users[userId];
                        return (<UserIndexItem key={user.id} user={user} />)
                    })}
                </div>
            </div>
        );
    }
}

export default UserIndex;