import { connect } from 'react-redux';
import ShowTodo from './show_todo';
import { fetchTodo } from '../../actions/todo_actions';
import { fetchUser } from '../../actions/user_actions';
import { selectUser } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
    let todo = state.entities.todos[ownProps.match.params.todoId];
    let user = todo ? state.entities.users[todo.userId] : {};
    return {
    todo,
    user
    }
};

const mapDispatchToProps = dispatch => ({
    fetchTodo: todoId => dispatch(fetchTodo(todoId)),
    fetchUser: userId => dispatch(fetchUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowTodo);