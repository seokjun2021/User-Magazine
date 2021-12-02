import React from 'react'
import styled from "styled-components"

const TextArea = (props) => {
    return(
        <>
        <TextBox></TextBox>
        </>
    )
}


TextArea.defaultProps = {
    fontsize: '16px',
    width: '50%'

}

const TextBox = styled.textarea`
font-size : 20px;
width: 100%;
height:100%;
`

export default TextArea


