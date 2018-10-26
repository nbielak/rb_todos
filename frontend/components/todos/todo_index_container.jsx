import { connect } from 'react-redux';
import TodoIndex from './todo_index';
import { fetchAllTodos } from '../../actions/todo_actions';
import { fetchAllUsers } from '../../actions/user_actions';

const mapStateToProps = state => ({
    todos: state.entities.todos,
    users: state.entities.users
});

const mapDispatchToProps = dispatch => ({
    fetchAllTodos: () => dispatch(fetchAllTodos()),
    fetchAllUsers: () => dispatch(fetchAllUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoIndex);