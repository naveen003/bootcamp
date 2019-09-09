import React from 'react';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import Header from '../../components/Header';
import FormValidator from '../../validator/formvalidator';

class VerifyPin extends React.Component{
  constructor(){
    super();
    this.validator = new FormValidator([
      {
        field: 'verifypin',
        method: 'isEmpty',
        validWhen: false,
        message: 'email/mobile is required.',
      },
    ]);
    this.state={
      verifypin:"",
      validation: this.validator.valid(),
    }
    this.submitted = false;
    this.buttonClick = this.buttonClick.bind(this);
    this.textChanged = this.textChanged.bind(this);
    this.navigateOnVerification = this.navigateOnVerification.bind(this);
  }
  textChanged(event){
    if(event !== null && event.target !== null && event.target !== undefined){
      this.setState({
        [event.target.name]:event.target.value
      });
    }
  }
  navigateOnVerification(validation) {
    if (validation.isValid) {
      if (this.props.history !== undefined) {
        this.props.history.push("/loginpin");
      }
    }
  }
  buttonClick(event){
    if(event !== null && event.target !== null && event.target !== undefined){
      if(event.target.name === "verify"){
        event.preventDefault();
        this.submitted = true;
        const isFormValid = this.validator.validate(this.state);
        this.setState({ validation: isFormValid });
        this.navigateOnVerification(isFormValid);
      }
    }
  }
  render(){
    const validation = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation;
    return(
      <div className="container">
        <div className="row">
            <div className="offset-md-3 col-md-5">
                <div className="loginOut">
                <Header 
                  value="Verification"
                  inputtype="h4"/>
                  <Header
                  value="Please enter the OTP send to your registered emial/mobile number."
                  inputtype="p"/>
                    <div className="form-group">
                      <TextInput
                          className="form-control"
                          type="text"
                          name="verifypin"
                          id="verifypin"
                          value={this.state.verifypin}
                          handleChange={this.textChanged}
                          haserror={validation.verifypin.isInvalid}
                          errormessage={validation.verifypin.message}
                        />
                    </div>
                    <div className="row">
                        <div className="offset-md-3 col-md-6 text-center">
                        <Button
                            name="verify"
                            type="button"
                            onClick={this.buttonClick}>Verify</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
export default VerifyPin;
