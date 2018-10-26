import { connect } from 'react-redux';
import CreateTodoForm from './create_todo_form';
import {createTodo} from '../../actions/todo_actions';
import { fetchAllUsers} from '../../actions/user_actions';

const mapStateToProps = state => ({
    users: state.entities.users,
    todo: {
        userId: null,
        title: '',
        completed: false
    }
})

const mapDispatchToProps = dispatch => ({
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    createTodo: todo => dispatch(createTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodoForm);