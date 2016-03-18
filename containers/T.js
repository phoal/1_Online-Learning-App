import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import NavButton from '../components/NavButton'
import NavTop from '../components/NavTop'
import Immutable from 'immutable'
//import NavTop from '../components/NavTop'
import NavLeft from '../components/NavLeft'
import {toggle} from '../actions'
import {navLeft, navTop} from '../reducers/initialState'

class T extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {showLeft, navLeft, navTop, children, toggle} = this.props
    return (
      <div className={showLeft}>
        <NavLeft list={navLeft}></NavLeft>
        <div className="phoal">
          <NavTop toggle={toggle} list={navTop}/>
          {children}
        </div>
      </div>
    )}
}

T.propTypes = {
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
export default connect(mapStateToProps, {toggle})(T)
