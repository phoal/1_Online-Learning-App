import React from 'react'
import { render } from 'react-dom'
import {Router, browserHistory, Route, IndexRoute} from 'react-router'
import App from '../modules/App'
import About from '../modules/about'
import Repos from '../modules/repos'
import Repo from '../modules/repo'
import Home from '../modules/home'
import T from '../containers/T'
module.exports = (
    <Route path="/" component={T} >

    </Route>
  )
