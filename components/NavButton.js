import React, {PropTypes} from 'react'

const NavButton = (props) => {
  const {hrefA, onClickA, classA, ariaA, desc, classI} = props
  return <a href={hrefA} onClick={onClickA} className={classA} aria-label={ariaA}>
    {desc}<i className={classI}></i></a>
}

NavButton.propTypes = {
  hrefA: React.PropTypes.string,
  onClickA: React.PropTypes.func,
  classA: React.PropTypes.oneOf(["btn", "btn pull-left", "btn pull-right"]),
  ariaA: React.PropTypes.string,
  desc: React.PropTypes.string,
  classI: React.PropTypes.string,
  index: React.PropTypes.number
}
NavButton.type = "NavButton"
export default NavButton
