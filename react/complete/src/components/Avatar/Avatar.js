import React from 'react';
import PropTypes from 'prop-types';
import styles from './Avatar.module.css';
import Header from '../Header';

const Avatar = props => (
  <div className={props.className}>
    <span className={props.id !== null && props.id !== undefined && props.id === "0" ?"mdi mdi-credit-card-outline icons":""}>{(props.id !== null && props.id !== undefined && props.id === "0" ) ? "" : props.avatarText}</span>
    <Header value={props.avatarName} inputtype={props.inputtype} />
  </div>
);

Avatar.defaultProps = {
  avatarText: '',
  className: '',
  inputtype: 'p',
  avatarName:'',
  id:''
};

Avatar.propTypes = {
  avatarText:PropTypes.string,
  className: PropTypes.string,
  inputtype: PropTypes.string,
  avatarName:PropTypes.string,
  id:PropTypes.string,
};

export default Avatar;
