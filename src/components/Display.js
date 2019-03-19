import styled from "styled-components";
import React, { Component } from 'react'
// React should always be your first import
// PS You aren't using { Component } - do you know why?
// https://screencast.com/t/xgAhAhjLJtE

const DisplayDiv = styled.div`
  background: white;
  color: black;
  border-radius: 15%;
  height: 30px;
  width: 100px;
  margin: auto;
  margin-bottom: 10px;
  text-align: center;

`

const Display = ({displayNumber}) => (

    <DisplayDiv>{displayNumber === 0 ? '' : displayNumber}</DisplayDiv>


)




export default Display
