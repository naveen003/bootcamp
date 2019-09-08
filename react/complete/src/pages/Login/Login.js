import React from 'react';
import PropTypes from 'prop-types';
import styles from './Login.module.css';

const Login = props => (
  <div className="row">
    <div className="offset-md-3 col-md-5">
      <div className="loginOut">
        <h4>Welcome</h4>
        <p>Please enter your email and pin to access your account</p>
        <div className="form-group">
          <input type="email" className="form-control" />
        </div>
        <div className="form-group">
          <input type="number" className="form-control" />
        </div>
        <a href="javascript:;" className="forgotPin">
          Forgot pin?
        </a>
        <div className="row">
          <div className="col-md-6">
            <button type="submit">Login</button>
          </div>
          <div className="col-md-6">
            <button>Signup</button>
            {/* <Link to="/register">Register </Link> */}
          </div>
        </div>
      </div>
    </div>
  </div>
);

Login.defaultProps = {};

Login.propTypes = {};

export default Login;
