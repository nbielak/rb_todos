import React from 'react';

class CreateTodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.todo;
        this.username = "";
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllUsers()
    }

    updateTitle() {
        return e => {
            this.setState({title: e.target.value})
        }
    }

    updateUsername() {
        return e => {
            this.username = e.target.value
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let userId = this.findUser();
        this.setState({userId: userId}, () => {
            let todo = Object.assign({}, this.state);
            return this.props.createTodo(todo)
                .then(res => {
                    return this.props.history.push(`/todos/${res.todo.id}`);
                })
        })
    }

    findUser() {
        let keys = Object.keys(this.props.users);
        for (let i = 0; i < keys.length; i++) {
            let user = this.props.users[keys[i]];
            if (user.username === this.username) {
                return user.id;
            }
        }
        return null;
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>Title</p>
                    <input type="text" onChange={this.updateTitle()} />
                    <p>Username</p>
                    <input type="" onChange={this.updateUsername()} />

                    <input type="submit" value="Create Todo"/>
                </form>
            </div>
        )
    }

    
}

export default CreateTodoForm;