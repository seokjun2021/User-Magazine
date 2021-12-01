import { lightBlue } from "@mui/material/colors"
import React from "react"
import styled from "styled-components"

const Text = (props) => {
    const {size,bold,color, padding, margin ,children} = props

    const styles={
        size:size,
        bold:bold,
        color:color,
        padding:padding,
        margin: margin,
    }

    return(
        <> 
        <P {...styles}>{children}</P>
        {/* p태그는 기본적으로 margin을 가지고 있다. */}

        </>

    )
}

Text.defaultProps = {
    children: null,
    size : 15,
    bold: false,
    color:lightBlue,
    margin: false,
}

const P = styled.p`
color: ${(props)=> props.color};
font-size: ${(props)=> props.size};
font-weight:${(props)=> (props.bold ? "600" : "400" )} ;
padding: ${(props)=> props.padding};
${(props)=> (props.margin? `margin:${props.margin}`:'')};
`


export default Text