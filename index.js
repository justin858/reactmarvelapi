import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Characters from './modules/Characters'
import Character from './modules/Character'
import Comics from './modules/Comics'
import Comic from './modules/Comic'
import Home from './modules/Home'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/comics" component={Comics}/>
      <Route path="/comics/:comicId" component={Comic}/>
      <Route path="/characters" component={Characters}/>
      <Route path="/characters/:characterId" component={Character}/>
    </Route>
  </Router>
), document.getElementById('app'))
