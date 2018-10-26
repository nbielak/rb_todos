import React from 'react';
import {Route, Switch} from 'react-router-dom';
import TodoIndexContainer from './todos/todo_index_container';

const App = () => (
  <div className="main-content">
    <div>
      <h1>Hello World</h1>
      <Switch>
        <Route path="/" component={TodoIndexContainer} />
      </Switch>
    </div>
  </div>
);

export default App;