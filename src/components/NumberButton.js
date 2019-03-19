import styled from "styled-components";
import {Button} from 'reactstrap'
import React, { Component } from 'react'

// again mind the line spacing and be consistent :)
const NumberButtonDiv = styled.button`
  background: #E23190;
  color: black;
  border-radius: 100%;
  padding: 15px 20px;
  :hover {
    background: #93235F;

  }
`

// I broke the code up to how I would have written it, can you see the
// difference in how it's a little more readable?
// It's just a good habbit to get into. :) 

const NumberButton = ({number, entryFunction}) => (
    <NumberButtonDiv onClick={() => entryFunction(number)}>
      {number}
    </NumberButtonDiv>
)



export default NumberButton
