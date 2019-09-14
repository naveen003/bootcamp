import React from 'react';
import PropTypes from 'prop-types';
// import styles from './SetTransactionPin.module.css';

import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import Header from '../../components/Header';
import singleton from '../../services/setpinApi';
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
      servererror:'',
      validation: this.validator.valid(),
    };
    this.submitted = false;
    this.buttonClick = this.buttonClick.bind(this);
    this.textChanged = this.textChanged.bind(this);
    this.navigateOnSuccess = this.navigateOnSuccess.bind(this);
  }

  async navigateOnSuccess(validation) {
    if (validation.isValid) {
      if (this.props.history !== undefined) {
        const dataObj = {
          pin: this.state.pin,
          hash: decodeURIComponent(this.props.match.params.id)
        };
        const response = await singleton.setpinAsync(dataObj);
        if (response !== null) {
          if ( response.message && response.message.length > 0) {
            this.setState({ servererror: response.message });
          } else {
            this.setState({ servererror: "Account Created Successfully !!!" });
            setTimeout(() => {
              this.props.history.push('/');  
            }, 1500);
          }
        }else{
          this.setState({ servererror: "Internal Server Error" });
        }
      }
    }
  }

  pinMatch = (confirmation, state) => state.pin === confirmation;

  textChanged(event) {
    this.setState({ servererror: ""});
    if (event !== null && event.target !== null && event.target !== undefined) {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  }

  async buttonClick(event) {
    this.setState({ servererror: ""});
    if (event !== null && event.target !== null && event.target !== undefined) {
      if (event.target.name === 'verifypin') {
        event.preventDefault();
        this.submitted = true;
        const isFormValid = this.validator.validate(this.state);
        this.setState({ validation: isFormValid });
        await this.navigateOnSuccess(isFormValid);
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
              {
                this.state.servererror.length > 0 ? <Header className="errorSpan" value={this.state.servererror} inputtype="p" /> : null
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SetTransactionPin.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
};

export default SetTransactionPin;
