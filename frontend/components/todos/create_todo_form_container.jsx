import { connect } from 'react-redux';
import CreateTodoForm from './create_todo_form';
import {createTodo} from '../../actions/todo_actions';
import { create } from 'domain';

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    createTodo: todo => dispatch(createTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodoForm);