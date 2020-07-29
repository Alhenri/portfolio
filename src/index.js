import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


function NotFound(){
  return(
    <div>
      <h1>Page not found</h1>
      <h3>Error 404!</h3>
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);