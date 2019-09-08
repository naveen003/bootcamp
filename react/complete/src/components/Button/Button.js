import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = (props) => {
  const Tag = props.href? 'a':'button';
  return <Tag {...props} />
}

Button.defaultProps = {
  value: 'Button',
  handleChange: function() {},
  id: 'button',
  name: 'button',
  type: 'button',
  className:''
};

Button.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  className:PropTypes.string
};

export default Button;
