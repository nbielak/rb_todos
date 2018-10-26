import React from 'react';

class CreateTodoForm extends React.Component {
    constructor(props) {
        this.state = {
            userId: null,
            title: ''
        }
    }

    update(field) {
        return e => {
            this.setState({[field]: e.target.value})
        }
    }

    
}