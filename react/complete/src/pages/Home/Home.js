import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.css';
import Avatar from '../../components/Avatar';


class Home extends React.Component{
  render(){
    return(
      <div className="container-fluid">
        <div className="row">
            <div className="col-md-4">
                <div className="dashboardLeftContent">
                  <Avatar 
                      className="top"
                      avatarUrl="https://statics.sportskeeda.com/wp-content/uploads/2014/11/completini_21_672-458_resize-1416579848.jpg"
                      avatarText="Hello John"
                      inputtype="h3"/>
                    <div className="middle">
                        <h1>100.568,00<small>available balance</small></h1>
                    </div>
                    <div className="bottom">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="circleOut">
                                    <i></i>
                                    <h6>Top-up</h6>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="circleOut">
                                    <i></i>
                                    <h6>Add Payee</h6>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="circleOut">
                                    <i></i>
                                    <h6>History</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-8 darker-grey">
                <div className="dashboardRightContent">
                    <h4>Recent Transactions</h4>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="circleOut">
                                <i className="mdi mdi-credit-card-outline icons"></i>
                                <h6>Pay</h6>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="circleOut">
                                <i><img src="assets/imgs/c2.jpg" /></i>
                                <h6>Theresa Hamilton</h6>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="circleOut">
                                <i><img src="assets/imgs/c4.jpg" /></i>
                                <h6>Josephine Cox</h6>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="circleOut">
                                <i><img src="assets/imgs/c5.jpg" /></i>
                                <h6>Josephine Cox</h6>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="circleOut">
                                <i><img src="assets/imgs/c5.jpg" /></i>
                                <h6>Josephine Cox</h6>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="circleOut">
                                <i><img src="assets/imgs/c6.jpg" /></i>
                                <h6>Josephine Cox</h6>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="circleOut">
                                <i><img src="assets/imgs/c7.jpg" /></i>
                                <h6>Josephine Cox</h6>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="circleOut">
                                <i><img src="assets/imgs/c8.jpg" /></i>
                                <h6>Josephine Cox</h6>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="circleOut">
                                <i><img src="assets/imgs/c9.jpg" /></i>
                                <h6>Pay</h6>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="circleOut">
                                <i><img src="assets/imgs/c2.jpg" /></i>
                                <h6>Theresa Hamilton</h6>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="circleOut">
                                <i><img src="assets/imgs/c4.jpg" /></i>
                                <h6>Josephine Cox</h6>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="circleOut">
                                <i><img src="assets/imgs/c5.jpg" /></i>
                                <h6>Josephine Cox</h6>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="circleOut">
                                <i><img src="assets/imgs/c5.jpg" /></i>
                                <h6>Josephine Cox</h6>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="circleOut">
                                <i><img src="assets/imgs/c6.jpg" /></i>
                                <h6>Josephine Cox</h6>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="circleOut">
                                <i><img src="assets/imgs/c7.jpg" /></i>
                                <h6>Josephine Cox</h6>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="circleOut">
                                <i><img src="assets/imgs/c8.jpg" /></i>
                                <h6>Josephine Cox</h6>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="circleOut">
                                <i><img src="assets/imgs/c9.jpg" /></i>
                                <h6>Pay</h6>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="circleOut">
                                <i><img src="assets/imgs/c2.jpg" /></i>
                                <h6>Theresa Hamilton</h6>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="circleOut">
                                <i><img src="assets/imgs/c4.jpg" /></i>
                                <h6>Josephine Cox</h6>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="circleOut">
                                <i><img src="assets/imgs/c5.jpg" /></i>
                                <h6>Josephine Cox</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
export default Home;
