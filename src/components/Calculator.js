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
  text-align: center;
  background: grey;
  width: 200px;
  border-radius: 30%;
  margin: 0 auto;
  padding: 30px;
  `

let displayVar = 'default'

class Calculator extends Component {

  state = {
    displayNumber: '',
    value: 0,
    solution: 0
  }



  doEntry = (number, displayNumber) => {

    number === 'C' ? this.setState({displayNumber: '0', value: '0'}) : this.setState({displayNumber: this.state.displayNumber+number})

  }

  doPlus = () => {
   // Display.value += Display.display
   // Display.display = ''
   this.setState({value: parseInt(this.state.displayNumber)+parseInt(this.state.value)})
   this.setState({displayNumber: 0})
   console.log(this.state.value)

  }

  doCalc = () => {
    // Display.display = Display.value
    this.setState({solution: parseInt(this.state.displayNumber)+parseInt(this.state.value)})
    this.setState({displayNumber: this.state.solution})
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

        <Button onClick={this.doCalc}>Enter</Button>
        </NumRow>

      </Calctainer>
    )}
}

export default Calculator
