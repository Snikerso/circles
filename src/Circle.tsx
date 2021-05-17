import React from 'react'
import styled from 'styled-components'

interface CircleProps {
    text:string;
}

const StyledCircle = styled.div`
    width:250px;
    height:250px;
    background-color:grey;
    color: white;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
`

const Circle = ({ text }:CircleProps) => {

    return( 
            <StyledCircle ><p>{text}</p></StyledCircle> 
    )

 }

 export default Circle