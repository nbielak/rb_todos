import { connect } from 'react-redux';
import UserIndex from './user_index';
import {fetchAllUsers} from '../../actions/user_actions';

const mapStateToProps = state => ({
    users: state.entities.users,
    todos: state.entities.todos
});

const mapDispatchToProps = dispatch => ({
    fetchAllUsers: () => dispatch(fetchAllUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserIndex);