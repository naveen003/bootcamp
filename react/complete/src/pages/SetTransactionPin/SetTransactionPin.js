import React from 'react';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import Header from '../../components/Header';
import PropTypes from 'prop-types';
import styles from './SetTransactionPin.module.css';
import FormValidator from '../../validator/FormValidator';

class SetTransactionPin extends React.Component {
  constructor() {
    super();
    this.validator = new FormValidator([
      {
        field: 'pin',
        method: 'isEmpty',
        validWhen: false,
        message: 'pin is required.',
      },
      {
        field: 'confirmpin',
        method: 'isEmpty',
        validWhen: false,
        message: 'confimation pin is required.',
      },
      {
        field: 'confirmpin',
        method: this.pinMatch, // notice that we are passing a custom function here
        validWhen: true,
        message: 'pin and confirmation pin do not match.',
      },
    ]);
    this.state = {
      pin: '',
      confirmpin: '',
      validation: this.validator.valid(),
    };
    this.submitted = false;
    this.buttonClick = this.buttonClick.bind(this);
    this.textChanged = this.textChanged.bind(this);
    this.navigateOnSuccess = this.navigateOnSuccess.bind(this);
  }

  navigateOnSuccess(validation) {
    if (validation.isValid) {
      if (this.props.history !== undefined) {
        alert('Faeture Under Devlopement');
      }
    }
  }

  pinMatch = (confirmation, state) => state.pin === confirmation;

  textChanged(event) {
    if (event !== null && event.target !== null && event.target !== undefined) {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  }

  buttonClick(event) {
    if (event !== null && event.target !== null && event.target !== undefined) {
      if (event.target.name === 'verifypin') {
        event.preventDefault();
        this.submitted = true;
        const isFormValid = this.validator.validate(this.state);
        this.setState({ validation: isFormValid });
        this.navigateOnSuccess(isFormValid);
      }
    }
  }

  render() {
    const validation = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation;
    return (
      <div className="container">
        <div className="row">
          <div className="offset-md-3 col-md-5">
            <div className="loginOut">
              <Header value="Last step." inputtype="h4" />
              <Header value="Set your transaction pin" inputtype="p" />
              <div className="form-group">
                <TextInput
                  className="form-control"
                  type="number"
                  name="pin"
                  id="pin"
                  placeholder="Set Pin"
                  value={this.state.pin}
                  handleChange={this.textChanged}
                  haserror={validation.pin.isInvalid}
                  errormessage={validation.pin.message}
                />
              </div>
              <div className="form-group">
                <TextInput
                  className="form-control"
                  type="number"
                  name="confirmpin"
                  id="confirmpin"
                  placeholder="Re-enter Pin"
                  value={this.state.confirmpin}
                  handleChange={this.textChanged}
                  haserror={validation.confirmpin.isInvalid}
                  errormessage={validation.confirmpin.message}
                />
              </div>
              <div className="row">
                <div className="offset-md-3 col-md-6 text-center">
                  <Button
                    name="verifypin"
                    type="button"
                    text="Make me an account"
                    onClick={this.buttonClick}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SetTransactionPin;
