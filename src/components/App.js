import React, { Component } from 'react';
import daiLogo from '../dai-logo.png';
import './App.css';
import Web3 from 'web3';
import DaiTokenMock from '../abis/DaiTokenMock.json'
import Nav from './nav';
import { BrowserRouter, Routes, Switch, Route } from "react-router-dom";
import Home from './Home';
import Transactions from './Transactions';
import Transactionhist from './Transactionhist';

class App extends Component {

  render() {
    return (
        <BrowserRouter>
        <Nav/>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/payment" element={<Transactions/>}/>
            <Route path="/transactionhist" element={<Transactionhist ol={Nav}/>}/>
          </Routes>
        </BrowserRouter>
    );
  }
}

export default App;
//BROWSER=chrome npm start