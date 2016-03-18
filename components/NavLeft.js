import React, {PropTypes} from 'react'
import ListItem from './ListItem'
import Module from './Module'
import Immutable from 'immutable'

const makeItem = (item, index) => {
  if (Immutable.Map.isMap(item)) {
    // level is re-used so DON'T use {...others}
    return <ListItem key={index} {...item.toObject()}></ListItem>
  } else if (Immutable.List.isList(item)) {
    return <Module key={index} list={item}></Module>
  }
}

const NavLeft = (props) =>
  <div className="nav-left">
    <input placeholder="Type to search" className="search" type="text"/>
    <nav role="navigation">
      <ul>
        {props.list.map(makeItem)}
      </ul>
    </nav>
  </div>

NavLeft.propTypes = {
  list: React.PropTypes.instanceOf(Immutable.List)
  /**
  Immutable.List<{Module.propTypes} || {ListItem.propTypes}>
  **/
}

export default NavLeft
