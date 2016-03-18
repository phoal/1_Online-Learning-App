import React, {PropTypes} from 'react'
import NavButton from './NavButton'
import FormInput from './FormInput'
import Immutable from 'immutable'
// Avoid string manipulation latency & errors
const EXPANDED = 'dropdown-menu dropdown-left lg expanded'
const COLLAPSED = 'dropdown-menu dropdown-left lg'

const SignIn = (props) => {
  const {buttonSI, buttonSubmit, buttonX, inputUser, inputPW, index, toggle, dropState} = props
  return (
  <div className="dropdown pull-right">
    <NavButton onClickA={toggle} {...buttonSI.toObject()}></NavButton>
    <div className={dropState ? EXPANDED : COLLAPSED}>
      <label className="spaced-item">
        SIGN IN
      </label>
      <FormInput {...inputUser.toObject()}></FormInput>
      <FormInput {...inputPW.toObject()}></FormInput>
      <NavButton onClickA={toggle} {...buttonX.toObject()}></NavButton>
      <NavButton {...buttonSubmit.toObject()}></NavButton>
    </div>
  </div>)
}

SignIn.propTypes = {
  dropState: React.PropTypes.bool.isRequired,
  buttonSI: React.PropTypes.shape(NavButton.propTypes),
  buttonSubmit: React.PropTypes.shape(NavButton.propTypes),
  buttonX: React.PropTypes.shape(NavButton.propTypes),
  inputUser: React.PropTypes.shape(FormInput.propTypes),
  inputPW: React.PropTypes.shape(FormInput.propTypes),
  index: React.PropTypes.number.isRequired, // index of this item in parents list
  toggle: React.PropTypes.func // toggles visibility of menus
}
SignIn.type = "SignIn"
export default SignIn
