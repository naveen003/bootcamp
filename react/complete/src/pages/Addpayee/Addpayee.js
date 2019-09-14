import React from 'react';
import PropTypes from 'prop-types';
import styles from './Addpayee.module.css';

class Addpayee extends React.Component{
  render(){
    return(
      <div className="container">
        <div className="walletTopUpOut">
            <h2>Add Payee</h2>
            <div className="row">
                <div className="col-md-12">
                    <div className="pr">
                        <i className="mdi mdi-magnify icon"></i>
                        <input type="number" className="innerSpace" placeholder="Search number" />
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
  }
}

export default Addpayee;
