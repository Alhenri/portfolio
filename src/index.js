import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Pages/Home';
import NotFound from './Pages/NotFound'
import Formacao from './Pages/Formacao'
import Projetos from './Pages/Projetos'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={ Home } exact />
      <Route path='/Formação' component={ Formacao } exact />
      <Route path='/Projetos' component={ Projetos } />
      <Route component={ NotFound } />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);