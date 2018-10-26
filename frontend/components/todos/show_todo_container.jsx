import { connect } from 'react-redux';
import ShowTodo from './show_todo';
import { fetchTodo } from '../../actions/todo_actions';

const mapStateToProps = (state, ownProps) => ({
    todo: state.entities.todos[ownProps.match.params.todoId]
});

const mapDispatchToProps = dispatch => ({
    fetchTodo: todoId => dispatch(fetchTodo(todoId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowTodo);