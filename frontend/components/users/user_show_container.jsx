import { connect } from 'react-redux';
import UserShow from './user_show';
import {fetchUser} from '../../actions/user_actions';
import { fetchUserTodos } from '../../actions/todo_actions';

const mapStateToProps = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId],
    todos: state.entities.todos
});

const mapDispatchToProps = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchUserTodos: (userId) => dispatch(fetchUserTodos(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);