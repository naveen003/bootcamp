import React from 'react';
import PropTypes from 'prop-types';
// import styles from './TextInput.module.css';

const TextInput = props => (
  <div className="form-group">
    {props.showLabel && <label htmlFor={props.labelFor}>{props.label}</label>}
    <input
      type={props.type}
      name={props.name}
      id={props.id}
      value={props.value}
      onChange={props.handleChange}
      className={props.className}
      placeholder={props.placeholder}
      maxLength={props.maxlength}
    />
    {props.haserror && (
      <span
        id={`error-${props.name}`}
        className={props.haserror ? 'help-block' : ''}
      >
        {props.errormessage}
      </span>
    )}
  </div>
);

TextInput.defaultProps = {
  label: 'Text Input',
  labelFor: 'text input',
  showLabel: false,
  value: 'Hello Text Input',
  handleChange() {},
  id: 'input',
  name: 'input',
  type: 'input',
  className: 'form-control',
  placeholder: '',
  haserror: false,
  errormessage: '',
  maxlength:''
};

TextInput.propTypes = {
  label: PropTypes.string,
  labelFor: PropTypes.string,
  showLabel: PropTypes.bool,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  haserror: PropTypes.bool,
  errormessage: PropTypes.string,
  maxlength:PropTypes.string,
};

export default TextInput;
