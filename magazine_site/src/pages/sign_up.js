import React from 'react';
import {Text,Input,Grid,Button} from '../elements'

import {useDispatch} from "react-redux"
import {actionCreators as userActions} from "../redux/modules/user"


const SignUp = (props) => {
    const dispatch = useDispatch()

    // 입력받은 값 state로  임시 저장하기
    const [id, setId] =  React.useState('')
    const [pwd, setPwd] =  React.useState('')
    const [pwd_check, setPwdCheck] =  React.useState('')
    const [user_name, setUserName] =  React.useState('')

    const signup = () => {
        if(id ==='' || pwd === ''|| user_name === ""){
            return // id가 공백이거나 pwd가 공백이거나 user_name이 공백이면 실행x
        }

        if(pwd !== pwd_check ){
            return // 서로 비번이 다르면 실행 안함 아무런 값 반환x
         }


        dispatch(userActions.signupFB(id,pwd,user_name))

    }

    return(
        <>
        <Grid>
            <Text  padding = '0px 15px' margin = '15px 0px'size = '30px' bold>회원가입</Text>
            <Grid padding= '10px'>
                <Grid padding = '20px 0px'> 
                <Input label = "아이디" 
                placeholder = "아이디를 입력하세요."
                _onChange = { (e) => {
                    setId(e.target.value)}}/> 
                    {/* e.target.value : 이벤트가 발생하는 타겟의 value 값이된다 -> input의 넣은 값이 value가 된다. */}
                </Grid>
                <Grid padding = '20px 0px'>
                <Input label = "닉네임" 
                placeholder = "닉네임를 입력하세요."
                _onChange = { (e) => {
                    setUserName(e.target.value)}}/>
                </Grid>
                 <Grid padding = '20px 0px'>
                 <Input label = "비밀번호"
                  placeholder = "비밀번호를 입력하세요."
                  _onChange = { (e) => {
                    setPwd(e.target.value)}}/>
                 </Grid>
                 <Grid padding = '20px 0px'>
                 <Input label = "비밀번호 확인" 
                 placeholder = "비밀번호를 다시 입력해주세요."
                 _onChange = { (e) => {
                    setPwdCheck(e.target.value)}}/>
                </Grid>
                <Grid padding = '25px 0px'>
                    <Button text = '회원가입 하기' _onClick= {signup} ></Button>
                </Grid>

            </Grid>

        </Grid>

        </>
    )
}

SignUp.defaultProps = {


}

export default SignUp