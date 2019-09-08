/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Register.module.css';

import TextInput from '../../components/TextInput';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      dob: '',
      email: '',
      mobile: '',
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleMultiSelect = this.handleMultiSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      console.log(this.state[name]);
    });
  }

  // handleMultiSelect(event) {
  //   this.setState({
  //     [event.target.name]: [...event.target.selectedOptions].map(o => o.value),
  //   });
  // }

  handleSubmit(event) {
    // const subscribed = this.state.subscribed ? 'Yes' : 'No';
    // alert(
    //   `Firstname: ${this.state.firstname}, Lastname: ${this.state.lastname}, Email: ${this.state.email}, Language: ${this.state.languages}, Subscribed: ${subscribed}`,
    // );
    if (this.state.email === 'test@test.com') {
      this.setState({
        isRegistered: true,
      });
    } else {
      this.setState({
        isRegistered: false,
      });
    }
    this.props.history.push("/verifypin");
    event.preventDefault();
  }

  render() {
    return (
      <div className="row">
        <div className="offset-md-1 col-md-10">
          <div className="loginOut">
            <h4 className="mb-3">Sign Up</h4>
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-md-6">
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
                  />
                </div>
                <div className="col-md-6">
                  <TextInput
                    labelFor="lastname"
                    label="Lastname"
                    placeholder="Lsst Name"
                    className="form-control"
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={this.state.lastname}
                    handleChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <TextInput
                    labelFor="dob"
                    label="Dob"
                    placeholder="DOB"
                    className="form-control"
                    type="text"
                    name="dob"
                    id="dob"
                    value={this.state.dob}
                    handleChange={this.handleChange}
                  />
                </div>
                <div className="col-md-6">
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
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <TextInput
                    labelFor="number"
                    label="Number"
                    placeholder="(xxx)xxx-xxxx"
                    className="form-control"
                    type="number"
                    name="mobile"
                    id="mobile"
                    value={this.state.mobile}
                    handleChange={this.handleChange}
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
