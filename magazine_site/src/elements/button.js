import React from 'react'
import styled from "styled-components"

const Button = (props) => {
    const {text, margin, _onClick, is_float,children } = props

    if(is_float){
        return(
        <FloatBtn  onClick = {_onClick} >{text?text:children}</FloatBtn>
        )
    }

    return(
        <>
            < BtnBox margin = {margin}  onClick = {_onClick} >{text?text:children}</BtnBox>
        </>
        

    )
}

Button.defaultProps = {
    text: false,
    _onClick :() => {},
    margin: 'false',
    is_float: false, 
    children:null,

}

const BtnBox = styled.button`
width: 100%;
background-color: black;
color: white;
padding: 12px 0px;
border : none;
${(props)=> (props.margin? `margin:${props.margin}`:'')};
`

const FloatBtn = styled.button`
width: 50px;
height: 50px;
background-color: lightblue;
color: white;
box-sizing: border-box;
font-size :25px;
font-weight: 800;
position: fixed;
bottom: 50px;
right: 16px;
text-align: center;
vertical-align: middle;
border:none;
border-radius: 50px;
`
export default Button