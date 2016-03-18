import React, {PropTypes} from 'react'

const FormInput = (props) =>
  <div className="spaced-item">
    <label>
      {props.label}
    </label>
    <input name={props.name} type={props.type}/>
  </div>

FormInput.propTypes = {
  label: React.PropTypes.string,
  name: React.PropTypes.string,
  type: React.PropTypes.string
}

export default FormInput
