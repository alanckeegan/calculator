import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import { Button } from 'reactstrap'
import Calculator from './components/Calculator'
// again, line spacing, consistency on ; use, unused imports
// you're doing great though!
// You should be very proud of this assignment! You've come a long ways. :)
// Great job!!!

class App extends Component {
  render() {
    return (

        <Calculator/>

    );
  }
}

export default App;
