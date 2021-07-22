import React, {useState} from 'react';
import Dashboard from './components/dashboard';
import Login from './page/login';
import Signup from './page/signup';
import {Route, Switch, HashRouter } from 'react-router-dom';
import { authContext } from './utils/authContext';

function App() {
  const [authToken, setAuthToken] = useState();

  const setToken = (data) => {
    //console.log(data.data.response)
    const response = data.data.response;
    //console.log(response.id)
    const token = data.data.token;
    //console.log(token)
    localStorage.setItem("UserId", response.id);
    localStorage.setItem("UserName", response.name);
    localStorage.setItem("UserEmail", response.email);
    localStorage.setItem("token", token);
    setAuthToken(token);
  };
  //console.log(localStorage)
  return(
    <HashRouter>
      <authContext.Provider value = {{authToken, setAuthToken: setToken}}>
        <Switch>
          <Route path="/admin" name="Dashboard" render={(props) => <Dashboard {...props} />} />
          <Route path="/" name="Login" exact render={(props) => <Login {...props} />} />
          <Route path="/signup" name="Signup" exact render={(props) => <Signup {...props} />} />
        </Switch>
        </authContext.Provider>
    </HashRouter>
  );
}

export default App;
