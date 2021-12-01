import React from 'react';
import {Text,Input,Grid,Button} from '../elements'
import { getCookie, setCookie , deleteCookie } from '../shared/cookie';
import {useDispatch} from "react-redux" // 액션을 부르기 위한 리액트 훅
import { actionCreators as userActions } from "../redux/modules/user" // 액션 생성 함수를 불러온다.
// as 로 뒤에 별명을 만들수있다
const SignIn = (props) => {
    const dispatch = useDispatch() // 디스패치 만듬

    const [id,setId] = React.useState("")
    const [pwd,setpwd] = React.useState("")

    const login = () => {
        if(id === ""||pwd === "" ){
            alert()
            return
        }




         dispatch(userActions.loginFB({})) // actionCreators 대신 별명인 userActions안에 있는 액션생성함수를 넣는다
    }


    return(
        <>
        <Grid padding = "16px">
            <Text size = "30px" bold>로그인</Text>
        <Grid padding= "16px 0px" >
            <Input 
               label = '아이디' 
                placeholder = '아이디를 입력해주세요' 
                _onChange = { () => {
                console.log('아이디를 입력했어!')}}/>
        </Grid>
        <Grid padding= "16px 0px">
            <Input label = '비밀번호'
            placeholder = '비밀번호를 입력해주세요'
            _onChange = { () => {
                console.log('비밀번호를 입력했어!')}}/>
        </Grid>
        <Button text = "로그인하기" _onClick= {() => {
            login()
            console.log('로그인했어!')}}/>
        </Grid>

        </>
    )
}
export default SignIn 