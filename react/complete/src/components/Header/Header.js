import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

const Header = props => {
  return (
      props.inputtype === "p" ? <p className={props.className}>{props.value}</p> :
      props.inputtype === "h1" ? (<h1 className={props.className}>{props.value}</h1>) : 
      props.inputtype === "h2" ?(<h2 className={props.className}>{props.value}</h2>):
      props.inputtype === "h3" ?(<h3 className={props.className}>{props.value}</h3>):
      props.inputtype === "h4" ?(<h4 className={props.className}>{props.value}</h4>):
      props.inputtype === "h5" ?(<h5 className={props.className}>{props.value}</h5>):
      props.inputtype === "h6" ?(<h6 className={props.className}>{props.value}</h6>):null
  );
};
Header.defaultProps = {
  value: 'Header',
  type: 1,
  className:'',
  inputtype:''
};

Header.propTypes = {
  value: PropTypes.string,
  type: PropTypes.number,
  className:PropTypes.string,
  inputtype:PropTypes.string
};

export default Header;
