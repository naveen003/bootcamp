import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Register from './pages/Register';
import Login from './pages/Login';
import VerifyPin from './pages/VerifyPin';
import Home from './pages/Home';
import SetLoginPin from './pages/SetLoginPin';
import SetTransactionPin from './pages/SetTransactionPin';
import Topup from './pages/Topup';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/verifypin/:id" component={VerifyPin} />
        <Route path="/home" component={Home} />
        <Route path="/loginpin/:id" component={SetLoginPin} />
        <Route path="/transactionpin/:id" component={SetTransactionPin} />
        <Route path="/topup" component={Topup} />
      </div>
    </Router>
  );
}

export default App;
