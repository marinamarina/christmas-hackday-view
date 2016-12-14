import './App.css';

import { IndexRoute, Route, Router, browserHistory } from 'react-router'
import React, { PropTypes } from 'react'

import Home from './Home'
import Layout from './Layout'

const myRoutes = () => (
  <Route path='/' component={Layout} >
    <IndexRoute component={Home} />
    <Route path='/cats' component={Home} />
  </Route>
)

const App = () => (
    <Router history={browserHistory}>
      {myRoutes()}
    </Router>
)

App.Routes = myRoutes

export default App;
