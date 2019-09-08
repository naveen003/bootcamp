import React from 'react';
import TextInput from '../../components/TextInput';
import PropTypes from 'prop-types';
import styles from './SetTransactionPin.module.css';

// const SetTransactionPin = props => {
//   return (
//     <div className={styles.root}></div>
//   );
// };

// SetTransactionPin.defaultProps = {};

// SetTransactionPin.propTypes = {};

class  SetTransactionPin extends React.Component{
  constructor(){
    super();
    this.state = {
      pin:"",
      confirmpin:""
    };
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
      if(event.target.name === "verifypin"){
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
                    <h4>Last step.</h4>
                    <p>Set your transaction pin</p>
                    <div className="form-group">
                    <TextInput
                          className="form-control"
                          type="text"
                          name="pin"
                          id="pin"
                          placeholder="Set Pin"
                          value={this.state.pin}
                          handleChange={this.textChanged}
                      />
                    </div>
                    <div className="form-group">
                    <TextInput
                          className="form-control"
                          type="text"
                          name="confirmpin"
                          id="confirmpin"
                          placeholder="Re-enter Pin"
                          value={this.state.confirmpin}
                          handleChange={this.textChanged}
                      />
                    </div>
                    <div className="row">
                        <div className="offset-md-3 col-md-6 text-center">
                            <button name="verifypin" type="button" onClick={(event)=>this.buttonClick(event)}>Make me an account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default SetTransactionPin;
