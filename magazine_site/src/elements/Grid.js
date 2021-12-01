import React from 'react';
import styled from "styled-components"

const Grid = (props) => {
    const {is_flex, width, padding, margin, bg, children} = props

    const styles = {
        is_flex:is_flex,
        width:width,
        margin: margin,
        padding: padding,
        bg:bg,
    }
    return (
        <>
        <GridBox {...styles}>
        {children}
        </GridBox>
        </>
    )
}

Grid.defaultProps = {
    children:null,
    is_flex: false,
    width:"100%",
    padding: false,
    margin: false,
    bg: false,
}

const GridBox = styled.div`
width:${(props) => props.width};
height :"100%";
box-sizing: border-box; //box-sizing = > 어디까지 포함시킬래? / 선까지 포함
${(props) => (props.padding ? `padding:${props.padding};`:"")}
${(props) => (props.margin ? `margin:${props.margin};`:"")}
${(props) => (props.bg ? `background-color:${props.bg};`:"")}
${(props) => props.is_flex 
? `display: flex; align-items: center; justify-content: space-between`:""}
// align-items: center -> 어떤 아이템을 기준으로 똑같이 가운데 정렬, justify-content: space-between -> 양옆으로 붙어서 정렬
`


export default Grid
