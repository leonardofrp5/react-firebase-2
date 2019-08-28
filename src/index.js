import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Login from './Components/Login';
import Dashboard from './Components/Dashboard';

const root = (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Redirect  from="/" to="/login"/>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(root, document.getElementById("root"));