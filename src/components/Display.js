import styled from "styled-components";
import React, { Component } from 'react'


const DisplayDiv = styled.div`
  background: white;
  color: black;
  border-radius: 15%;
  height: 30px;
  width: 100px;

`

const Display = ({displayNumber}) => (

    <DisplayDiv>{displayNumber === 0 ? '' : displayNumber}</DisplayDiv>


)




export default Display
