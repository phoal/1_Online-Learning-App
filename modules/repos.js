// modules/Repos.js
import React from 'react'
import {Link, browserHistory} from 'react-router'
import NavLink from './navLink'

export default React.createClass({

  // ask for `router` from context
  contextTypes: {
    router: React.PropTypes.object
  },
  handleSubmit(event) {
    event.preventDefault()
    const userName = event.target.elements[0].value
    const repo = event.target.elements[1].value
    const path = `/repos/${userName}/${repo}`
    console.log(path)
    //browserHistory.push(path)
    this.context.router.push(path)
  },
  render() {
    return (
      <div>
      <h1> Repos </h1>
      <ul>
        <li><NavLink to="/repos/jj/jj" >Repos/jj/jj</NavLink></li>
        <li><NavLink to="/repos/kk/kk" >Repos/kk/kk</NavLink></li>
        <li>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="userName"/> / {' '}
            <input type="text" placeholder="repo"/>{' '}
            <button type="submit">Go</button>
          </form>
        </li>
      </ul>
      {this.props.children}
      </div>
  )}
})
