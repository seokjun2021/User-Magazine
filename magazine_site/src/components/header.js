import React from 'react'
import {Grid, Text, Button} from '../elements'
import {getCookie,deleteCookie} from '../shared/cookie'
import {useSelector,useDispatch} from "react-redux" // stroe에 있는 값을 가져오는 리액트 훅
import {actionCreators } from '../redux/modules/user'
import { history } from '../redux/configureStore'
import { apiKey } from '../shared/firebase'
import Permit from '../shared/permit'

const Header = (props) => {    
    const dispatch = useDispatch()
 // useState를 사용할때
    // const [is_login, setIsLogin] = React.useState(false) 

    // React.useEffect(() => {
    //     let cookie = getCookie("user_id")
    //     console.log(cookie)

    //     if(cookie){
    //         setIsLogin(true)
    //     }else
    //         setIsLogin(false)
    // })

    // 리덕스로 사용할때
    const is_login = useSelector((state) => state.user.is_login)

    //session 체크 
    const _session_key =`firebase:authUser:${apiKey}:[DEFAULT]` // session에 있는 키를 복사해서 api키만 바꿔줌줌

    const is_session = sessionStorage.getItem(_session_key)? true : false

    console.log(is_session)

    if(is_login && is_session) {
        return (
            <Permit>
            <>
              <Grid is_flex>
               <Grid is_flex>
                  <Text bold size= "30px">Bar</Text>
                  </Grid>
             <Grid is_flex>
                 <Button margin = '0px 16px' text ='내정보'></Button>
                 <Button text ='로그아웃' _onClick={() => {dispatch(actionCreators.logoutFB())}}></Button>
             </Grid>
             </Grid>
             </>
        </Permit>
        )}

        
        return(
            <>
        <Grid is_flex>
             <Grid is_flex>
             <Text bold size= "30px">Bar</Text>
             </Grid>
        <Grid is_flex>
            <Button margin = '0px 16px' text ='로그인' _onClick = {() => {history.push('/login')}}></Button>
            <Button text ='회원가입'  _onClick = {() => {history.push('/signup')}}></Button>
        </Grid>
        </Grid>
        </>
        )

    
}
Header.defaultProps = {

}

export default Header
