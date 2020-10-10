import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

 import { logoutSubmit } from './actions/actions'

import { useDispatch } from 'react-redux'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import RoutePrivate from './containers/RoutePrivate'
import NavigationBar from './containers/NavigationBar'
import Home from './containers/Home'
import Login from './containers/Login'
import Users from './containers/Users'
import User from './containers/User'


function App() {
  
  const dispatch = useDispatch();

  const handlerLogout = () => {
    dispatch(
      logoutSubmit()
    )  
  }

  return (
    <div className="App">
      <NavigationBar handlerLogout={handlerLogout}/>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <RoutePrivate path="/users/:pageNumber?" component={Users} />
          <RoutePrivate path="/user/:userID" component={User} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
