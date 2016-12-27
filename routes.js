import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import React from 'react'
import {render} from 'react-dom'
import Main from './components/Main'
import Articles from './components/Articles'
import Whoops from './components/Whoops'

render((
   <Router history={browserHistory}>
     <Route path="/" component={Main}/>
       <Route path="*" component={Whoops}/>
   </Router>
), document.getElementById('container'))
