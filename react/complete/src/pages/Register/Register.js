import React from 'react';
import FormValidator from '../../validator/formvalidator';
import PropTypes from 'prop-types';
import styles from './Register.module.css';

import TextInput from '../../components/TextInput';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.validator = new FormValidator([
      {
        field: 'firstname',
        method: 'isEmpty',
        validWhen: false,
        message: 'FirstName is required.',
      },
      {
        field: 'lastname',
        method: 'isEmpty',
        validWhen: false,
        message: 'Lastname is required.',
      },
      {
        field: 'mobile',
        method: 'isEmpty',
        validWhen: false,
        message: 'Pleave provide a phone number.',
      },
      {
        field: 'mobile',
        method: 'matches',
        args: [/^(?:\(\d{3}\)|\d{3}-)\d{3}-\d{4}$/], // args is an optional array of arguements that will be passed to the validation method
        validWhen: true,
        message: 'That is not a valid phone number.',
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
      {
        field: 'dob',
        method: 'isISO8601',
        validWhen: true,
        message: 'Please enter valid dob.',
        'use-strict': true,
      },
    ]);

    this.state = {
      firstname: '',
      lastname: '',
      dob: '',
      email: '',
      mobile: '',
      validation: this.validator.valid(),
    };
    this.submitted = false;
    this.handleChange = this.handleChange.bind(this);
    // this.handleMultiSelect = this.handleMultiSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    if (event.target.name === 'mobile') {
      let newstr = '';
      if (value.length > 0) {
        const replacedStr = value
          .replace('(', '')
          .replace(')', '')
          .replace('-', '');
        if (replacedStr.length <= 3) {
          newstr = replacedStr;
        } else if (replacedStr.length <= 6) {
          newstr = `(${replacedStr.substring(0, 3)})`;
          newstr += replacedStr.substring(3);
        } else {
          newstr = `(${replacedStr.substring(0, 3)})`;
          newstr += `${replacedStr.substring(3, 6)}-`;
          newstr += replacedStr.substring(6);
        }
      }
      this.setState({ [name]: newstr }, () => {
        console.log(this.state[name]);
      });
    } else {
      this.setState({ [name]: value }, () => {
        console.log(this.state[name]);
      });
    }
  }

  // handleMultiSelect(event) {
  //   this.setState({
  //     [event.target.name]: [...event.target.selectedOptions].map(o => o.value),
  //   });
  // }

  navigateOnRegister(validation) {
    if (validation.isValid) {
      if (this.props.history !== undefined) {
        this.props.history.push("/verifypin");
      }
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.submitted = true;
    const isFormValid = this.validator.validate(this.state);
    this.setState({ validation: isFormValid });
    this.navigateOnRegister(isFormValid);
  }

  render() {
    const validation = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation;
    return (
      <div className="row">
        <div className="offset-md-1 col-md-10">
          <div className="loginOut">
            <h4 className="mb-3">Sign Up</h4>
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-md-6 ">
                  <TextInput
                    labelFor="firstname"
                    label="Firstname"
                    placeholder="First Name"
                    className="form-control"
                    type="text"
                    name="firstname"
                    id="firstname"
                    value={this.state.firstname}
                    handleChange={this.handleChange}
                    haserror={validation.firstname.isInvalid}
                    errormessage={validation.firstname.message}
                  />
                </div>
                <div className="col-md-6 ">
                  <TextInput
                    labelFor="lastname"
                    label="Lastname"
                    placeholder="Last Name"
                    className="form-control"
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={this.state.lastname}
                    handleChange={this.handleChange}
                    haserror={validation.lastname.isInvalid}
                    errormessage={validation.lastname.message}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <TextInput
                    labelFor="dob"
                    label="Dob"
                    placeholder="yyyy-mm-dd"
                    className="form-control"
                    type="text"
                    name="dob"
                    id="dob"
                    value={this.state.dob}
                    handleChange={this.handleChange}
                    haserror={validation.dob.isInvalid}
                    errormessage={validation.dob.message}
                  />
                </div>
                <div className="col-md-6 ">
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
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 ">
                  <TextInput
                    labelFor="number"
                    label="Number"
                    placeholder="(xxx)xxx-xxxx"
                    className="form-control"
                    type="text"
                    name="mobile"
                    id="mobile"
                    value={this.state.mobile}
                    handleChange={this.handleChange}
                    haserror={validation.mobile.isInvalid}
                    errormessage={validation.mobile.message}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <button type="submit">Signup me up!</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

// Register.defaultProps = {};

// Register.propTypes = {};

export default Register;
