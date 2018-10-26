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
        return <div className="create-todo">
            <div className="page-header-wrapper">
              <h1>Create New Todo</h1>
            </div>
            <form className="create-todo-form" onSubmit={this.handleSubmit}>
              <div className="input-wrapper">
                <label className="label-title">Title</label>
                <input className="form-control" type="text" onChange={this.updateTitle()} placeholder="Input Title"/>
              </div>

              <div className="input-wrapper">
                <label className="label-title">Username</label>
                <input className="form-control" type="" onChange={this.updateUsername()} placeholder="Input Username"/>
              </div>

              <div className="submit-wrapper">
                <input className="btn btn-primary" type="submit" value="Create Todo" />
              </div>
            </form>
          </div>;
    }

    
}

export default CreateTodoForm;