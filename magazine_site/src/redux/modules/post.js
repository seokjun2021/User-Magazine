import {createAction,handleAction,handleActions} from "redux-actions" 
import {produce} from "immer"

const SET_POST = "SET_POST"  // 리스트를 리덕스에 넣어줌
const ADD_POST = "ADD_POST"  // 리덕스에 리스트를 추가해줌

const setPost = createAction(SET_POST,(post_list) => ({post_list})) 
const addPost = createAction(ADD_POST,(post) => ({post})) // 리액트 불러옴

const initialState = { // 리스트 목록 => 리듀서가 사용할 초기값
    list:[], 
}

const initialPost = { // 각각의 게시글 정보
    id:0,
    user_info:{
        user_name: "mean0",
        user_profile: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mk.co.kr%2Fnews%2Fculture%2Fview%2F2021%2F06%2F535745%2F&psig=AOvVaw1-yxR7gPpvhBdiiAQB0Vn0&ust=1638282146357000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjhmd3ivfQCFQAAAAAdAAAAABAD",
    },
    user_img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mk.co.kr%2Fnews%2Fculture%2Fview%2F2021%2F06%2F535745%2F&psig=AOvVaw1-yxR7gPpvhBdiiAQB0Vn0&ust=1638282146357000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjhmd3ivfQCFQAAAAAdAAAAABAD",
    contents: "고양이네요",
    user_time: "2021-11-29 11:00:00",
    user_like: "좋아요",
    user_like_count: 5,
}

export default handleActions( // 리듀서
    {
        [SET_POST] : (state,action) => produce(state, (draft) => {

        }),
        [ADD_POST] : (state,action) => produce(state, (draft) => {

        })
    },
    initialState   
)

const actionCreators = { //액션생성자 내보냄
    setPost,
    addPost,
}

export {actionCreators}
