import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.css';
import Avatar from '../../components/Avatar';
import singleton from '../../services/authenticateApi';

class Home extends React.Component {
  constructor(){
    super();
    this.state={
      users:[],
      loginedUser:{}
    }
    this.navigatetoTopup = this.navigatetoTopup.bind(this);
    this.navigatetoAddPayee = this.navigatetoAddPayee.bind(this);
  }
  async componentDidMount() {
    var response = await singleton.getAllUsers();
    if(response !== null){
      let loggedinUser = {};
      let remainingData = [];
      remainingData.push({firstName:"Pay", _id:"0"});
      response.map((item)=>{
          if(item._id === sessionStorage.userid){
            loggedinUser = item;
          }else{
            remainingData.push(item);
          }
      });
      this.setState({'users' : remainingData,'loginedUser':loggedinUser});
    }
  }

  navigatetoTopup(){
    if (this.props.history !== undefined) {
      this.props.history.push('/topup');
    }
  }

  navigatetoAddPayee(){
    if (this.props.history !== undefined) {
      this.props.history.push('/addpayee');
    }
  }

  render() {
    let name = this.state.loggedinUser!== null && this.state.loginedUser !== undefined ? this.state.loginedUser.firstName + " " + this.state.loginedUser.lastName : "";
    let firstChar = name !== null && name !== undefined && name.length > 0 ? name[0] : "";
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <div className={styles.dashboardLeftContent}>
              <Avatar
                className={styles.top + " " +  styles.userAvatar}
                avatarUrl="https://statics.sportskeeda.com/wp-content/uploads/2014/11/completini_21_672-458_resize-1416579848.jpg"
                avatarText={firstChar}
                avatarName={name}
                inputtype="h3"
              />
              <div className={styles.middle}>
                <h1>
                  0 <small>available balance</small>
                </h1>
              </div>
              <div className={styles.bottom}>
                <div className="row">
                  <div className="col-4" onClick={this.navigatetoTopup}>
                    <div className={styles.circleOut}>
                      <i></i>
                      <h6>Top-up</h6>
                    </div>
                  </div>
                  <div className="col-4" onClick={this.navigatetoAddPayee}>
                    <div className={styles.circleOut}>
                      <i></i>
                      <h6>Add Payee</h6>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className={styles.circleOut}>
                      <i></i>
                      <h6>History</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 darker-grey">
            <div className={styles.dashboardRightContent}>
              <h4>Recent Transactions</h4>
                  <div className="row">
                {this.state.users.map((user,index) => (
                  <div className={styles.circleOut  + " col-3 " + styles.cussorpointer}>
                  <Avatar
                    className={styles.top}
                    avatarText={(user.firstName + " " + (index === 0 ? "" : user.lastName))[0]}
                    avatarName={user.firstName + " " + (index === 0 ? "" : user.lastName)}
                    inputtype="h6"
                    key={user._id}
                    id={user._id}
              />
                </div>
                ))}
                <div>
              </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
