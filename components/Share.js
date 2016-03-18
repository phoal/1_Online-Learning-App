import React, {PropTypes} from 'react'
import NavButton from './NavButton'
import Immutable from 'immutable'

// Avoid string manipulation latency & errors
const EXPANDED = 'dropdown-menu dropdown-left expanded'
const COLLAPSED = 'dropdown-menu dropdown-left'

const Share = (props) =>
  <div className="dropdown pull-right">
    <NavButton onClickA={props.toggle} {...props.list.first().toObject()}></NavButton>
    <div className={props.dropState ? EXPANDED : COLLAPSED}>
      {props.list.shift().map( (item, index) =>
        <NavButton key={index} {...item.toObject()}></NavButton>)}
    </div>
  </div>


Share.propTypes = {
  dropState: React.PropTypes.bool.isRequired,
  index: React.PropTypes.number.isRequired, // index of this list in the parent list
  toggle: React.PropTypes.func, // toggles visibility of menus
  list: React.PropTypes.instanceOf(Immutable.List).isRequired,

  /**
  * List<Immutable.Map({NavButton.propTypes})>
  */
}
Share.type = "Share"
export default Share
