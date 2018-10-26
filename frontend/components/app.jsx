import React from 'react';
import {Route, Switch} from 'react-router-dom';
import TodoIndexContainer from './todos/todo_index_container';
import ShowTodoContainer from './todos/show_todo_container';
import CreateTodoFormContainer from './todos/create_todo_form_container';
import UserIndexContainer from './users/user_index_container';
import UserShowContainer from './users/user_show_container';

const App = () => (
  <div className="main-content">
    <div>
      <h1>Hello World</h1>
      <Switch>
        <Route exact path="/" component={TodoIndexContainer} />
        <Route path="/createtodo" component={CreateTodoFormContainer}/>
        <Route path="/todos/:todoId" component={ShowTodoContainer}/>
        <Route exact path="/users" component={UserIndexContainer}/>
        <Route path="/users/:userId" component={UserShowContainer} />
      </Switch>
    </div>
  </div>
);

export default App;