import React from 'react'
import { render } from 'react-dom'
import Root from '../containers/Root'
import { browserHistory } from 'react-router'
import configureStore from '../store/configureStore'

export const store = configureStore()
render(
  <Root store={store} history={browserHistory} />,
  document.getElementById('root')
)
