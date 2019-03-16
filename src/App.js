import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import { Button } from 'reactstrap'
import Calculator from './components/Calculator'


class App extends Component {
  render() {
    return (

        <Calculator/>

    );
  }
}

export default App;
