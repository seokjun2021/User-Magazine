import React from 'react';
import Post from '../components/post'
import {useSelector,useDispatch} from "react-redux"
import {actionCreators as postActions} from "../redux/modules/post"


 function MainList(props) {
   const dispatch = useDispatch()
   const post_list = useSelector((state) => state.post.list) // 리덕스 데이터 불러옴

   React.useEffect(() => {  //  게시글이 0이 아닐경우에는 추가할때는 getPostFB를 하지않고도 추가할수있다.
     if(post_list.length === 0){
      dispatch(postActions.getPostFB())
     }
   },[])
  return (
    <>
    {post_list.map((p,idx) => {
      return <Post key = {p.id} {...p}/>
    })}
    </>
  );
}

export default MainList