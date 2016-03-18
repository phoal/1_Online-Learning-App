import React, {PropTypes} from 'react'

const ListItem = (props) =>
  <li className={props.classLi} onClick={props.onClickLi}>
    <a href={props.hrefA}>
      <i className={props.classI}></i>
      {props.level} {props.title}
    </a>
  </li>

ListItem.propTypes = {
  classLi: React.PropTypes.oneOf(["active", "done"]),
  onClickLi: React.PropTypes.instanceOf(Function), // fn() = programatic dom manipulation
  hrefA: React.PropTypes.string, // href
  classI: React.PropTypes.string, // "fa fa-name"
  level: React.PropTypes.number, // unique id
  title: React.PropTypes.string.isRequired
}
ListItem.type = 'ListItem'
export default ListItem
