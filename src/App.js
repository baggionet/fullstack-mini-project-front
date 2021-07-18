import React from 'react';
import Dashboard from './components/dashboard';
import Login from './page/login';
import AddUser from './views/addUser';
import {Route, Switch, HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/admin" name="Dashboard" render={(props) => <Dashboard {...props} />} />
        <Route path="/" name="Login" exact render={(props) => <Login {...props} />} />
      </Switch>
    </HashRouter>
  );
}

export default App;
