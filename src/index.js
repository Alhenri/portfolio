import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NotFound from './Pages/NotFound'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);