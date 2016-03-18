import React, {PropTypes} from 'react'
import Immutable from 'immutable'
import ListItem from './ListItem'

const mod = (props) => {
  const first = props.list.first()
  return (
  <li className={first.get('classLi')} onClick={first.get('onClickLi')}>
    <a href={first.get('hrefA')}>
      <i class={first.get('classI')}></i>
      {first.get('level')} {first.get('title')}
    </a>
    <ul>
      {props.list.shift().map( (item, index) =>
        // level is re-used so DON'T use {...others}
          <ListItem key={index} {...item.toObject()}></ListItem>
      )}
    </ul>
  </li>)
}

mod.propTypes = {
  list: React.PropTypes.instanceOf(Immutable.List).isRequired
  /**
  List<Immutable.Map>
  item = Immutable.Map({
    ListItem.propTypes
  })
  **/
}
mod.type = 'Module'
export default mod
