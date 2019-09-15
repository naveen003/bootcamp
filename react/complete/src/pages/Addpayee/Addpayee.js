import React from 'react';
import PropTypes from 'prop-types';
import styles from './Addpayee.module.css';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import Header from '../../components/Header';

class Addpayee extends React.Component{
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
    let friendsList = [
      {
          payeename:"Payee Name",
          payeenumber:1234567890,
          payeetype:1,
          nickname:''
      },
      {
        payeename:"Payee Name 1",
        payeenumber:1122334455,
        payeetype:2,
        nickname:''
      },
      {
        payeename:"Payee Name 2",
        payeenumber:9876543210,
        payeetype:2,
        nickname:''
      }
    ];
    this.state={
      friendslist:friendsList,
      searchText:'',
      filteredList:friendsList
    }
  }

  buttonClick(event) {
    if (event !== null && event.target !== null && event.target !== undefined) {
      let index = event.target.name.split("-")[1];
      let {filteredList} = this.state;
      alert("Selected Payee Name :" + filteredList[index].payeename);
    }
  }

  handleChange(event){
    if (event !== null && event.target !== null && event.target !== undefined) {
      if(event.target.name === "searchtext"){
        var filterList = this.state.friendslist;
        if(event.target.value && event.target.value.length > 0){
          filterList = this.state.friendslist.filter((item)=>{
            let payeeName  = item.payeename.toLowerCase();
            let payeeNumber = item.payeenumber.toString().toLowerCase();
            let result = payeeName.indexOf(event.target.value.toLowerCase())  >= 0 || payeeNumber.toLowerCase().indexOf(event.target.value.toLowerCase()) >= 0
            return result;
          })
        }
        this.setState({searchText:event.target.value,filteredList:filterList});
      }else{
        let index = event.target.name.split("-")[1];
        let {filteredList} = this.state;
        filteredList[index].nickname =event.target.value;
        this.setState({filteredList:filteredList});
      }
    }
  }
  render(){
    return(
      <div className="container">
        <div className="walletTopUpOut">
        <Header value="Add Payee" inputtype="h2" />
            <div className="row">
                <div className="col-md-12">
                    <div className="pr">
                        <i className="mdi mdi-magnify icon"></i>
                        <TextInput
                            className='innerSpace'
                            type="text"
                            name="searchtext"
                            id="searchtext"
                            placeholder="Search number"
                            value={this.state.searchText}
                            handleChange={this.handleChange}
                          />
                    </div>
                </div>
            </div>
            <div className="searchLists">
            <Header value="People" inputtype="h5" />
                <div>
                {
                  this.state.filteredList.map((item,index)=>(
                    <div className="row" key={index}>
                    <div className="col-md-4">
                    <Header value={item.payeename} inputtype="h6" />
                    </div>
                    <div className="col-md-4">
                        <span className="number">{item.payeenumber}</span>
                    </div>
                    <div className="col-md-2">
                    <TextInput
                        type="text" 
                        name= { "nickname-" + index}
                        id={ "nickname-" + index}
                        placeholder="Nik (optional)"
                        value={item.nickname}
                        handleChange={this.handleChange}/>
                    </div>
                    <div className="col-md-2">
                    <Button
                        name= { "btnconfirm-" + index} 
                        type="button"
                        text="Confirm"
                        id={"btnconfirm-" + index}
                        onClick={this.buttonClick}/>
                    </div>
                    </div>
                  ))
                }
                <div>
            </div>
            </div>
        </div>
        </div>
        </div>
    )
  }
}

export default Addpayee;
