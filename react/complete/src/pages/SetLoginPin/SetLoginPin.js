import React from 'react';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import Header from '../../components/Header';

class  SetLoginPin extends React.Component{
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
        this.props.history.push("/transactionpin");
      }
    }
  }
  render(){
    return(
      <div className="container">
        <div className="row">
            <div className="offset-md-3 col-md-5">
                <div className="loginOut">
                  <Header 
                  value="Let’s get you set up"
                  inputtype="h4"/>
                  <Header
                  value="Set your login Pin"
                  inputtype="p"/>
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
                          <Button
                            name="verifypin"
                            id="verifypin"
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
export default SetLoginPin;
