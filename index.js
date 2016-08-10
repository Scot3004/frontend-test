import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import News from './views/News';
import Dashboard from './views/Dashboard';
require('./scss/main.scss');

render((
  <Router history={hashHistory}>
    <Route path="/" component={News}/>
    <Route path="/dashboard" component={Dashboard}/>
  </Router>
), document.getElementById('app'));
