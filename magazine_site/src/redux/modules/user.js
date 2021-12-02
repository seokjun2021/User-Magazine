// Duck 구조 =>기능( action, actionCreator, reducer)으로 묶어 작성하는 구조
//<Ducs 패턴의 규칙>
//1.연관된 액션 타입, 액션 생성자 함수, 리듀서 함수를 하나의 파일로 작성
//2.리듀서 함수는 export default 키워드로 내보냄
//3.액션 생성자 함수는 export 키워드로 내보냄
//4.액션 타입은 접두사와 액션 이름을 조합해서 작명

import {createAction,handleActions} from "redux-actions" 
// createAction = 액션을 편하게 만들어 주는 거 , handleActions = 리듀서를 편하게 만들어주는거
import {produce} from "immer"
import {setCookie,getCookie,deleteCookie} from "../../shared/cookie"
import { auth } from "../../shared/firebase";
import firebase from 'firebase/app'


// 액션타입 정의 == actions => action : 상태의 변화가 필요할때 액션 발생
const LOG_OUT = "LOG_OUT"
const GET_USER = "GET_USER"
const SET_USER = "SET_USER"

// 액션 생성함수(자) 정의 == action creators

// 원래는 const logIn = (user) => { // 이 함수는  user라는 파라미터를 입력받아,액션을 객체형태로 변환
//     return {
//         type : LOG_IN,
//         user
//  액션는 하나의 객체로 표현,Type 필수
//  상태의 변화가 필요할때 액션 발생
//     }
// }
// 모듈을 먼저 만드는 이유는 모듈이 있어야 export default를 하는 리듀서를 모아서 미들웨어랑 엮어서 스토어를 만들기 때문에 
//어쨋든 스토어를 만들기전에 모듈에 대한 것 하나는 만들어야 되므로 만드는 김에 한꺼번에 다 만든다. 
const setUser = createAction(SET_USER,(user) =>({user}))
const logOut = createAction(LOG_OUT,(user) =>({user}))
const getUser = createAction(GET_USER,(user) =>({user}))


// initialState == defaultProps  같은거 == 초기값 지정
const initialState = {
    user:null,
    is_login:false,
}

const user_initial = {
    user_name: 'mean0'
}


// middleware actions -> 미들웨어를 이용해서 페이지이동을 하기 위해
//파이어베이스 로그인 할땐 필요x
// const loginAction = (user) => {
//     return function (dispatch,getState,{history}){
//         console.log(history)
//         dispatch(setUser(user))
//         history.push('/')
//     }
// }

const loginFB = (id,pwd) => {
    return function(dispatch, getState,{history}) {  // history는 페이지이동할때 쓰임
        
        auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then((res) => {
            auth.signInWithEmailAndPassword(id,pwd)
            .then((user) => { 
                console.log(user) // 로그인 한 다음 작업
                dispatch(setUser({
                    user_name:user.user.displayName, 
                    id:id,
                    user_profile:"",
                    uid:user.user.uid,

                }))
                history.push('/')
                })
                .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log(errorCode,errorMessage)
                });
            }) 

        }
    
    }

    const loginCheckFB = () => {
        return function(dispatch,getState,{history}) {
            auth.onAuthStateChanged((user) => {  // user가 있냐 없냐 확인인
                if(user){
                    dispatch(setUser({
                        user_name: user.displayName,
                        user_profile: "",
                        id: user.email,
                        uid: user.uid,
                    }))
                }else{ // 
                   dispatch(logOut)
                }
            })
        }
    }

    const logoutFB = () => {
        return function (dispatch, getState, {history}) {
            auth.signOut().then(() => {
                dispatch(logOut())
                history.replace('/') //뒤로가기를 해도 전에 갔던 페이지가 나오지 않는다.
            })
        }
    }



const signupFB = (id,pwd,user_name) => {
    return function (dispatch, getState,{history}){

        auth
        .createUserWithEmailAndPassword(id, pwd)
        .then((user) => {

          console.log(user)

            auth.currentUser.updateProfile({
                displayName:user_name, }).then(() => {
                dispatch(setUser({
                    user_name:user_name, 
                    id:id,
                    user_profile:"",
                    uid:user.user.uid,

                }))
                history.push('/')
                // Update successful
                }).catch((error) => {
                        console.log(error)
                });  
          

        })
    
            .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;

          console.log(errorCode,errorMessage)

        });
    }
}


// reducer == 리듀서 정의 => 변화를 일으키는 함수로서 이전상태와 액션을 파라미터로 입력받음
// 반환값은 로직에 의해 변화된 상태 값을 반환
// 리듀서 안에서 불변성 유지 => immer 사용하면 알아서 유지해줌
export default handleActions({ // 첫번재 파라미터에는 액션에 따라 실행할 함수들을 가지고 있는 객체, 두번재 파라미터에는 상태의 기본값(initialState)
    [SET_USER] :(state, action) => produce(state, (draft) =>{  //  <-- 이 중괄호 안에 해당 로직 작성성
        // 접두사(_)가 들어가있기 때문에 LOG_IN -> [LOG_IN] 써야함
        setCookie("is_login", "success") // 첫번째 파라미터는 키, 두번째 파라미터는 값
        draft.user = action.payload.user  // 원래는 action.type해서 액션타입이 들어오고 action.user하면 생성함수가 들어왔는데 
                                          //  createAction를 쓰게 되면 중간에 payload에 보낸 데이터가 담겨서 중간에 적어줘야한다.  
        draft.is_login = true

    }), // draft = statef를 복사한 값 -> state 대신 사용
    [LOG_OUT] :(state, action) => produce(state,(draft)=>{
        deleteCookie("is_login")
        draft.user = null
        draft.is_login = false  
    }),
    [GET_USER] :(state, action) => produce(state,(draft)=>{})
},  
initialState)

// action creator export =>  액션생성함수를 다른데에서 가져다 쓰기 위해 묶어서 내보냄
const actionCreators = {
    logOut,
    getUser,
    //loginAction, 파이어베이스 로그인 할땐 필요x
    signupFB,
    loginFB,
    loginCheckFB,
    logoutFB,
}
export { actionCreators } 