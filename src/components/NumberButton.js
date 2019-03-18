import styled from "styled-components";
import {Button} from 'reactstrap'
import React, { Component } from 'react'


const NumberButtonDiv = styled.button`
  background: #E23190;
  color: black;
  border-radius: 100%;
  padding: 15px 20px;
  :hover {
    background: #93235F;

  }
`



const NumberButton = ({number, entryFunction}) => (
    <NumberButtonDiv onClick={() => entryFunction(number)}>{number}</NumberButtonDiv>
)



export default NumberButton
