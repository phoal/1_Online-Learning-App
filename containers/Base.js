import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import NavTop from '../components/NavTop'
import NavLeft from '../components/NavLeft'
import Immutable from 'immutable'
import {toggle} from '../actions'

class Base extends Component {
  constructor(props) {
    super(props)
    this.navToggle = this.navToggle.bind(this)
  }

  navToggle(index) {
    return (e) => this.props.toggle(index)
  }

  render() {
    const {showLeft, navLeft, navTop, children} = this.props
    return (
      <div className={showLeft}>
        <NavLeft {...navLeft}></NavLeft>
        <div className="phoal">
          <NavTop toggle={navToggle} {...navTop}></NavTop>
          {children}
        </div>
      </div>
    )
  }
}

Base.propTypes = {
  // Injected by Redux
  showLeft: React.PropTypes.oneOf(['expanded', '']).isRequired,
  navLeft: React.PropTypes.shape(NavLeft.propTypes).isRequired,
  navTop: React.PropTypes.shape(NavTop.propTypes).isRequired,
  // Injected by React Router
  children: PropTypes.node
}

function mapStateToProps(state, ownProps) {
  return {
    showLeft: state.base.showLeft,
    navLeft: state.base.navLeft,
    navTop: state.base.navTop
  }
}
// Creates a stateful parent Container to this Component which does the injecting
// Automatically creates a 'toggle' prop - a functiion which dispatches the 'toggle action'
export default connect(mapStateToProps, {toggle})(Base)
