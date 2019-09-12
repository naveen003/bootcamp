import React from 'react';
import PropTypes from 'prop-types';
import styles from './Addpayee.module.css';

class Addpayee extends React.Component{
  render(){
    return(
      <div class="container">
        <div class="walletTopUpOut">
            <h2>Add Payee</h2>
            <div class="row">
                <div class="col-md-12">
                    <div class="pr">
                        <i class="mdi mdi-magnify icon"></i>
                        <input type="number" class="innerSpace" placeholder="Search number" />
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
  }
}

export default Addpayee;
