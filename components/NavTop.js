import React, {PropTypes} from 'react'
import Immutable from 'immutable'
import NavButton from './NavButton'
import Share from './Share'
import SignIn from './SignIn'

const makeToggle = (toggle, index) =>
  (e) => toggle(index)
      
const makeNode = (toggle) =>
  (item, index) => {
    //let {type, ...core} = item.toObject()
    const type = item.get('type')
    const core = item.delete('type').toObject()
    const made = makeToggle(toggle, index)
    switch (type) {
      case NavButton.type:
        return <NavButton key={index} {...core}></NavButton>
      case Share.type:
          return <Share key={index} toggle={made} {...core}></Share>
      case SignIn.type:
          return <SignIn key={index} toggle={made} {...core}/>
      default: return null
  }

}

const NavTop = (props) =>
<div className="nav nav-top" role="navigation">
  {props.list.map(makeNode(props.toggle))}
</div>

NavTop.propTypes = {
  toggle: React.PropTypes.func, // toggles visibility of menus
  list: React.PropTypes.instanceOf(Immutable.List).isRequired
  /**
  * Immutable.List<{type: Element.type, ...Element.propTypes}>
  * Element = NavButton || SignIn || Share
  */
}
export default NavTop
