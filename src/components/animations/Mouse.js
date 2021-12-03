import React from 'react'
import styled, { keyframes } from 'styled-components'

const mouseWheel = keyframes`
    0% {
    transform: translateY(0);
    opacity: 0;
  }  
  10% {
    transform: translateY(0);
    opacity: 1;
  }
  30% {
    transform: translateY(0);
    height: 4px;
  }
  50% {
    transform: translateY(0);
    height: 20px;
  }
  70% {
    transform: translateY(15px);
    height: 4px;
    opacity: 1;
  }
  90% {
    opacity: 0;
  }
  100% {
    transform: translateY(15px);
    opacity: 0;
  }
`

const MouseAnim = styled.div` 
    overflow:hidden;
    position:absolute;
    left:50%;
    transform: translateX(-50%);
    bottom: 25px;
    width:24px;
    height:50px;
    border:2px solid #fff;
    border-radius:30px;
    opacity: 1;
    :after{
        display: block;
        content:"";
        position:absolute;
        left:13px;
        top:10px;
        width:4px;
        height:4px;
        margin-left: -3px;
        background-color:white;
        border-radius:2px;
        animation: ${mouseWheel} 2.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;
    }
`
export const Mouse = () => <MouseAnim />
