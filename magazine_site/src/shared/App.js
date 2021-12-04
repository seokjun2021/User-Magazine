import MainList from "../pages/main_list"
import {BrowserRouter , Route} from "react-router-dom"
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import SignIn from "../pages/sign_in"
import Header from "../components/header";
import {Grid,Button } from "../elements"
import SignUp from "../pages/sign_up";
import { actionCreators as userActions } from "../redux/modules/user";
import {useDispatch}  from "react-redux"
import React from "react";
import { apiKey } from './firebase'
import Permit from "./permit";
import MakePost from "../pages/make_post";
import Detail from "../pages/detail";

function App() {
  const dispatch = useDispatch()
  
  // App.js가 처음 시작점이기 때문에 여기서 session을 확인하는게 깔끔하다.
  const _session_key =`firebase:authUser:${apiKey}:[DEFAULT]` // session에 있는 키를 복사해서 api키만 바꿔줌줌

    const is_session = sessionStorage.getItem(_session_key)? true : false


  React.useEffect(() => { // useEffect는 배열안에 있는 값이 바뀌면 함수가 실행되지만 빈 배열일 경우 한번만 실행한다.
    if(is_session){
      dispatch(userActions.loginCheckFB())

    }
  },[])

  return (
    <>
    <Grid>
      <Header></Header>
        <ConnectedRouter history = {history}>
            <Route path = '/' exact component={MainList}></Route>
            <Route path = '/login' exact component={SignIn}></Route>
            <Route path = '/signup' exact component={SignUp}></Route>
            <Route path = '/makepost' exact component={MakePost}></Route>
            <Route path = '/post/:id' exact component={Detail}></Route>           
        </ConnectedRouter>
    </Grid>
    <Permit>
        <Button is_float text = "+" _onClick = {() =>{history.push("/makepost")}} ></Button>
      </Permit>

    </>
  );
}

export default App;

