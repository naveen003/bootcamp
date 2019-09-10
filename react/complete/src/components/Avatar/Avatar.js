import React from 'react';
import PropTypes from 'prop-types';
import styles from './Avatar.module.css';
import Header from '../Header';

const Avatar = props => {
  return (
    <div className={props.className}>
      <i><img src={props.avatarUrl} /></i>
      <Header
          value={props.avatarText}
          inputtype={props.inputtype} />
    </div>
  );
};

Avatar.defaultProps = {};

Avatar.propTypes = {};

export default Avatar;
