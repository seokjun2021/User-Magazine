import React from 'react'
import styled from "styled-components"

const Button = (props) => {
    const {text, margin, _onClick} = props
    return(
        <>
            < BtnBox margin = {margin}  onClick = {_onClick} >{text}</BtnBox>
        </>
        

    )
}

Button.defaultProps = {
    text: "텍스트",
    _onClick :() => {},
    margin: 'false' 

}

const BtnBox = styled.button`
width: 100%;
background-color: black;
color: white;
padding: 12px 0px;
border : none;
${(props)=> (props.margin? `margin:${props.margin}`:'')};
`
export default Button