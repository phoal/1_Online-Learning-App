import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import routes from '../public/routes'
import DevTools from './DevTools'
import { Router } from 'react-router'

export default class Root extends Component {
/*  render() {

    return (
      <Provider store={store}>
        <div>
          <Router history={browserHistory} routes={routes} />
          <DevTools />
        </div>
      </Provider>
    )
  }
  */
render() {
  const { store, history } = this.props
  return (

    <Provider store={store}>
      <div>
        <Router routes={routes} history={history}/>
        <DevTools />
      </div>
    </Provider>
)}
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}
