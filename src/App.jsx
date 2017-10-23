import React, {Component} from 'react';
import {Router, Route, Switch} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
import TableContainer from './components/TableContainer'

const newHistory = createBrowserHistory();

const App = () => (
  <Router history={newHistory}>
  	<Switch>
    	<Route path="/" component={TableContainer} />
    </Switch>
  </Router>
)

export default App;
