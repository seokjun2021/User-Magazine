import React from "react"
import { useSelector } from "react-redux" // Redux에 있는 데이터를 가져온다.
import {apiKey} from "./firebase"

const Permit = (props) => {
    
    const is_login = useSelector(state => state.user.user)

    const _session_key =`firebase:authUser:${apiKey}:[DEFAULT]` // session에 있는 키를 복사해서 api키만 바꿔줌줌

    const is_session = sessionStorage.getItem(_session_key)? true : false

    if(is_session && is_login){
        return <>{props.children}</> 
        
    }else{
        return null
    }
}

export default Permit