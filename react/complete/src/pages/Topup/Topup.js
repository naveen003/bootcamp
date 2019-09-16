import React from 'react';
import styles from './Topup.module.css';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import FormValidator from '../../validator/FormValidator';
import Header from '../../components/Header';


class Topup extends React.Component{
  constructor(){
    super();
    this.validator = new FormValidator([
      {
        field: 'amount',
        method: 'isEmpty',
        validWhen: false,
        message: 'amount is required.',
      },
      {
        field: 'amount',
        method: 'isCurrency',
        validWhen: true,
        message: 'Please enter valid amount and two digits after decimal',
      }
    ]);
    this.state={
      amount:'',
      validation: this.validator.valid(),
    }
    this.addMoney = this.addMoney.bind(this);
    this.textChanged = this.textChanged.bind(this);
    this.submitted = false;
    this.goBack = this.goBack.bind(this);
  }
  goBack(){
    if (this.props.history !== undefined) {
      this.props.history.goBack()
    } 
  }
  textChanged(event) {
    if (event !== null && event.target !== null && event.target !== undefined) {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  }

  addMoney(event){
      event.preventDefault();
      this.submitted = true;
      const isFormValid = this.validator.validate(this.state);
      this.setState({ validation: isFormValid });
      if (this.props.history !== undefined && isFormValid.isValid) {
        this.props.history.push("/payment/" +this.state.amount)
      }
  }
  render(){
    const validation = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation;
    return(
      <div className="container">
        <div className="walletTopUpOut">
          <div className="row">
            <div className="col-10">
              <Header value="Wallet Top-up" inputtype="h2" /> 
            </div>
            <div className="col-2 text-right" onClick={this.goBack}>
              <i className="mdi mdi-close CloseIcon"></i>
            </div>
          </div>
           
            <div className="row">
                <div className="col-md-9">
                <TextInput
                  className="form-control"
                  type="text"
                  name="amount"
                  id="amount"
                  placeholder="Amount"
                  value={this.state.amount}
                  handleChange={this.textChanged}
                  haserror={validation.amount.isInvalid}
                  errormessage={validation.amount.message}
                />
                </div>
                <div className="col-md-3">
                    <Button
                    name="btnaddmoey"
                    type="button"
                    text="Add Money"
                    id="btnaddmoey"
                    onClick={this.addMoney}/>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default Topup;
