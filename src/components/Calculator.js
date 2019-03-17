import styled from "styled-components"
import '../App.css'
import React, { Component } from 'react'
import { Button, Container } from 'reactstrap'
import NumberButton from './NumberButton'
import Display from './Display'

//Really struggling with text alignment/centerin stuff

const NumRow = styled.div`
  width: 4em;
  display: flex;
`

const Calctainer = styled.div`

  background: grey;
  width: 200px;
  border-radius: 30%;
  margin: 0 auto;
  padding: 30px;
  `

const EnterButton = styled.button`
background: white;
color: black;
border-radius: 15%;
height: 30px;
margin: auto;
margin-bottom: 10px;
text-align: center;

  `


class Calculator extends Component {

  state = {
    displayNumber: '',
    value: 0,
    solution: ''
  }



  doEntry = (number, displayNumber) => {

    number === 'C' ? this.setState({displayNumber: '', value: '0'}) : this.setState({displayNumber: this.state.displayNumber+number})
    console.log(this.state)
  }

  doPlus = () => {

   this.setState({value: parseInt(this.state.displayNumber)+parseInt(this.state.value)})
   this.setState({displayNumber: 0})
   console.log(this.state)

  }

  doCalc = (display) => {
    // Display.display = Display.value
    this.setState(
      {solution: parseInt(this.state.displayNumber)+parseInt(this.state.value), value: 0},
      () => this.setState({displayNumber: this.state.solution}, () => console.log(this.state))
    )

  }

  render() {
    return (
      <Calctainer>
      <Display displayNumber={this.state.displayNumber}/>
        <NumRow>
        <NumberButton number={1} entryFunction={this.doEntry}/>
        <NumberButton number={2} entryFunction={this.doEntry}/>
        <NumberButton number={3} entryFunction={this.doEntry}/>
        </NumRow>

        <NumRow>
        <NumberButton number={4} entryFunction={this.doEntry}/>
        <NumberButton number={5} entryFunction={this.doEntry}/>
        <NumberButton number={6} entryFunction={this.doEntry}/>
        </NumRow>

        <NumRow>
        <NumberButton number={7} entryFunction={this.doEntry}/>
        <NumberButton number={8} entryFunction={this.doEntry}/>
        <NumberButton number={9} entryFunction={this.doEntry}/>
        </NumRow>

        <NumRow>
        <NumberButton number='+' entryFunction={this.doPlus}/>
        <NumberButton number={0} entryFunction={this.doEntry}/>
        <NumberButton number='C' entryFunction={this.doEntry}/>
        </NumRow>
        <NumRow>

        <EnterButton onClick={this.doCalc}>Enter</EnterButton>
        </NumRow>

      </Calctainer>
    )}
}

export default Calculator
