import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import routes from '../public/routes'
import { Router, browserHistory } from 'react-router'

export default class Root extends Component {
  render() {
    const { store, history } = this.props
    return (
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}
