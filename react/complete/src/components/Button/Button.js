import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = props => (
  <button
    type={props.type}
    name={props.name}
    id={props.id}
    onClick={props.onClick}
    className={props.className}
  >
    {props.text}
  </button>
);

Button.defaultProps = {
  onClick: function() {},
  id: 'button',
  name: 'button',
  type: 'button',
  className: '',
  text: 'submit',
};

Button.propTypes = {
  onClick: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string,
};

export default Button;
