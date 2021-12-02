import React from 'react';
import Post from '../components/post'
import {useSelector} from "react-redux"


 function MainList(props) {
   const post_list = useSelector((state) => state.post.list) // 리덕스 데이터 불러옴

   console.log(post_list)
  return (
    <>
    {post_list.map((p,idx) => {
      return <Post key = {p.id} {...p}/>
    })}
    </>
  );
}

export default MainList