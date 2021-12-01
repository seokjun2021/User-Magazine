import React from 'react'
import styled from "styled-components"
import {Text,Grid} from "./index"


const Input = (props) => {
    const {label,placeholder,_onChange} = props
    return(
        
        <Grid>
        <Text size = '13px' margin = "0px">{label}</Text>
        <InputBox 
        placeholder = {placeholder} 
        onChange = {_onChange}/>
        </Grid>

    )
    
}

Input.defaultProps = {

    label : '텍스트',
    placeholder: "텍스트를 입력해주세요", //  placeholder 는 입력된 값이 없을 때 시용
    _onchange: () => {} // 콜백함수  // 변화를 감지하는 함수
}

const InputBox = styled.input`
border:1px solid black;
width: 100%;
padding: 12px 4px;
box-sizing: border-box;
`

export default Input