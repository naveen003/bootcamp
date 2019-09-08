import React from 'react';
import TextInput from '../../components/TextInput';
import PropTypes from 'prop-types';
import styles from './VerifyPin.module.css';

// const VerifyPin = props => {
//   return (
//     <div className={styles.root}></div>
//   );
// };

// VerifyPin.defaultProps = {};

// VerifyPin.propTypes = {};

class VerifyPin extends React.Component{
  constructor(){
    super();
    this.state={
      verifypin:""
    }
    this.buttonClick = this.buttonClick.bind(this);
    this.textChanged = this.textChanged.bind(this);
  }
  textChanged(event){
    if(event !== null && event.target !== null && event.target !== undefined){
      this.setState({
        [event.target.name]:event.target.value
      });
    }
  }
  buttonClick(event){
    if(event !== null && event.target !== null && event.target !== undefined){
      if(event.target.name === "verify"){
        alert("Feature Under Development");
      }
    }
  }
  render(){
    return(
      <div className="container">
        <div className="row">
            <div className="offset-md-3 col-md-5">
                <div className="loginOut">
                    <h4>Verification</h4>
                    <p>Please enter the OTP send to your registered emial/mobile number.</p>
                    <div className="form-group">
                      <TextInput
                          className="form-control"
                          type="text"
                          name="verifypin"
                          id="verifypin"
                          value={this.state.verifypin}
                          handleChange={this.textChanged}
                        />
                    </div>
                    <div className="row">
                        <div className="offset-md-3 col-md-6 text-center">
                            <button name="verify" type="button" onClick={(event)=>this.buttonClick(event)}>Verify</button>
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
