import React from 'react';
import styles from './Paymentoption.module.css';
import MasterCard from '../../assets/images/mastercard.png';
import VisaCard from '../../assets/images/visa.png';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import Header from '../../components/Header';

class Paymentoption extends React.Component{
  constructor(){
    super();
    let CardDetals=[];
    let card1 = {
      bankname:"Bank Name",
      cardnumber:"123x xxxx xxxx 8920",
      cardtype:"visa",
      cvv:"",
      selected:false,
      iscard:true,
      haserror:false,
      errormessage:"Please enter CVV to Proceed"
    };
    CardDetals.push(card1);
    let card2 = {
      bankname:"Bank Name 1",
      cardnumber:"123x xxxx xxxx 8921",
      cardtype:"master",
      cvv:"",
      selected:false,
      iscard:true,
      haserror:false,
      errormessage:"Please enter CVV to Proceed"
    };
    CardDetals.push(card2);
    let card3 = {
      bankname:"Bank Name 2",
      cardnumber:"123x xxxx xxxx 8922",
      cardtype:"master",
      cvv:"",
      selected:false,
      iscard:true,
      haserror:false,
      errormessage:"Please enter CVV to Proceed"
    };
    CardDetals.push(card3);
    let card4 = {
      bankname:"New Debit Card",
      selected:false,
      iscard:false
    };
    CardDetals.push(card4);
    let card5 = {
      bankname:"New Credit Card",
      selected:false,
      iscard:false
    };
    CardDetals.push(card5);
    this.state={
      CardDetails:CardDetals,
      SelectedCardDetals:{}
    }
    this.radioSelected = this.radioSelected.bind(this);
    this.cvvChange = this.cvvChange.bind(this);
    this.addMoneytoWallet = this.addMoneytoWallet.bind(this);
  }
  addMoneytoWallet(index){
    if(this.state.CardDetails[index].cvv !== null && !isNaN(parseInt(this.state.CardDetails[index].cvv))){
      alert("Money Added to Wallet...");
    }else{
      let {CardDetails} = this.state;
    CardDetails.map((inneritem,innerindex)=>{
      if(innerindex == index){
        inneritem.error = true;
      }else{
        inneritem.error = false;
      }
    });
    this.setState({CardDetails:CardDetails});
    }
    
  }
  radioSelected(item,index){
    let {CardDetails} = this.state;
    CardDetails.map((inneritem,innerindex)=>{
      if(innerindex == index){
        inneritem.selected = true;
      }else{
        inneritem.selected = false;
      }
      inneritem.error = false;
    });
    this.setState({CardDetails:CardDetails});
  }
  cvvChange(index,value){
    let {CardDetails} = this.state;
    CardDetails[index].cvv = value;
    CardDetails[index].error = value.length === 0;
    this.setState({CardDetails:CardDetails});
  }
  render(){
    return(
      <div className="container">
        <div className="walletTopUpOut">
            <h2>Wallet Top-up<small>Select your mode of payment</small></h2>
            <ul className="cardDetails">
            {
              this.state.CardDetails.map((item,index)=>(
                <li key={index}>
                    <div className="row">
                        <div className="col-md-1">
                            <input onChange={()=>this.radioSelected(item,index)} type="radio" name="common-radio-name" id={"radio-" + index} className="radio-button" />
                            <label htmlFor={"radio-" + index} className="radio-button-click-target">
                                <span className="radio-button-circle"></span>
                            </label>
                        </div>
                        <div className="col-md-4">
                            <h4>{item.bankname}<small style={{"display":(item.iscard ? "" : "none")}}>{item.cardnumber}</small></h4>
                        </div>
                        <div className="col-md-1" style={{"display":(item.iscard   ? "" : "none")}}>
                            <i className="cardType"><img src={item.cardtype === "master" ? MasterCard : VisaCard}/></i>
                        </div>
                        <div className="col-md-6" style={{"display":(item.iscard && item.selected ? "" : "none")}}>
                            <div className="row">
                                <div className="col-md-6">
                                <TextInput
                                      type="number"
                                      name="cvv"
                                      id="cvv"
                                      placeholder="CVV"
                                      value={item.cvv}
                                      handleChange={(value)=>this.cvvChange(index,value.target.value)}
                                      haserror={item.error}
                                      errormessage={item.errormessage}
                                    />
                                </div>
                                <div className="col-md-6">
                                <Button
                                    name="btnProceed"
                                    type="button"
                                    text="Proceed"
                                    id="btnProceed"
                                    onClick={()=>this.addMoneytoWallet(index)}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                
              ))
            }
            </ul>
        </div>
    </div>
    )
  }
}
export default Paymentoption;
