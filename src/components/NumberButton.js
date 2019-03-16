import styled from "styled-components";
import {Button} from 'reactstrap'
import React, { Component } from 'react'


const NumberButtonDiv = styled.button`
  background: black;
  color: red;
  border-radius: 100%;
  padding: 15px 20px;
  :hover {
    color: white;

  }
`

const NumberButton = ({number, entryFunction}) => (
    <NumberButtonDiv onClick={() => entryFunction(number)}>{number}</NumberButtonDiv>
)



export default NumberButton