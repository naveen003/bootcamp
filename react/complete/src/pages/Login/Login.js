import React from 'react';
import PropTypes from 'prop-types';
import styles from './Login.module.css';

import FormValidator from '../../validator/FormValidator';

import TextInput from '../../components/TextInput';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.validator = new FormValidator([
      {
        field: 'code',
        method: 'isEmpty',
        validWhen: false,
        message: 'Pleave provide a valid pin.',
      },
      {
        field: 'code',
        method: 'matches',
        args: [/^\d{4}$/], // args is an optional array of arguements that will be passed to the validation method
        validWhen: true,
        message: 'That is not a valid pin.',
      },
      {
        field: 'email',
        method: 'isEmpty',
        validWhen: false,
        message: 'Email is required.',
      },
      {
        field: 'email',
        method: 'isEmail',
        validWhen: true,
        message: 'Please enter valid email.',
      },
    ]);

    this.state = {
      email: '',
      code: '',
      validation: this.validator.valid(),
    };
    this.submitted = false;
    this.handleChange = this.handleChange.bind(this);
    // this.handleMultiSelect = this.handleMultiSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSignupClick = this.handleSignupClick.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      console.log(this.state[name]);
    });
  }

  navigateToHome(validation) {
    if (validation.isValid) {
      if (this.props.history !== undefined) {
        this.props.history.push('/home');
      }
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.submitted = true;
    const isFormValid = this.validator.validate(this.state);
    this.setState({ validation: isFormValid });
    this.navigateToHome(isFormValid);
  }

  handleSignupClick() {
    if (this.props.history !== undefined) {
      this.props.history.push('/register');
    }
  }

  render() {
    const validation = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation;
    return (
      <div className="row">
        <div className="offset-md-3 col-md-5">
          <div className="loginOut">
            <h4>Welcome</h4>
            <p>Please enter your email and pin to access your account</p>
            <form onSubmit={this.handleSubmit}>
              <TextInput
                labelFor="email"
                label="E-mail"
                placeholder="Email"
                className="form-control"
                type="email"
                name="email"
                id="email"
                value={this.state.email}
                handleChange={this.handleChange}
                haserror={validation.email.isInvalid}
                errormessage={validation.email.message}
              />
              <TextInput
                labelFor="code"
                label="Code"
                placeholder="xxxx"
                className="form-control"
                type="number"
                name="code"
                id="code"
                value={this.state.code}
                handleChange={this.handleChange}
                haserror={validation.code.isInvalid}
                errormessage={validation.code.message}
              />
              <a href="/forgotPin" className="forgotPin">
                Forgot pin?
              </a>
              <div className="row">
                <div className="col-md-6">
                  <button type="submit">Login</button>
                </div>
                <div className="col-md-6">
                  <button type="button" onClick={this.handleSignupClick}>
                    Signup
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

// Login.defaultProps = {};

Login.propTypes = {
  history: PropTypes.object,
};

export default Login;
