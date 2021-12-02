import React from 'react';
import {Text,Input,Grid,Button} from '../elements'
import { getCookie, setCookie , deleteCookie } from '../shared/cookie';
import {useDispatch} from "react-redux" // 액션을 부르기 위한 리액트 훅
import { actionCreators as userActions } from "../redux/modules/user" // 액션 생성 함수를 불러온다.
import { emailCheck } from '../shared/common';
// as 로 뒤에 별명을 만들수있다
const SignIn = (props) => {
    const dispatch = useDispatch() // 디스패치 만듬

    // input에서 입력받은 값 임시저장
    const [id,setId] = React.useState(" ")
    const [pwd,setPwd] = React.useState(" ")   

    const login = () => {

        



        if(id === ""||pwd === "" ){
            window.alert('아이디 혹은 비밀번호가 공란입니다! 입력해주세요!')
            return
        }

        if(!emailCheck(id)){
            window.alert("이메일 형식이 맞지 않습니다!.")
        
             return
        }
         dispatch(userActions.loginFB(id, pwd)) // actionCreators 대신 별명인 userActions안에 있는 액션생성함수를 넣는다
    }



    return(
        <>
        <Grid padding = "16px">
            <Text size = "30px" bold>로그인</Text>
        <Grid padding= "16px 0px" >
            <Input 
               label = '아이디' 
                placeholder = '아이디를 입력해주세요' 
                _onChange = { (e) => {
                setId(e.target.value)}}/>
        </Grid>
        <Grid padding= "16px 0px">
            <Input
            type = 'password' 
            label = '비밀번호'
            placeholder = '비밀번호를 입력해주세요'
            _onChange = { (e) => {
                setPwd(e.target.value)}}/>
        </Grid>
        <Button text = "로그인하기" _onClick= {() => {
            login()
            console.log('로그인했어!')}}/>
        </Grid>

        </>
    )
}
export default SignIn 