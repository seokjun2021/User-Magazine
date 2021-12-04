import React from 'react';
import {Text,Input,Button,Image,Grid,TextArea} from "../elements"
import Upload from '../shared/Upload';

import { useSelector,useDispatch } from 'react-redux';
import { actionCreators as postActions } from '../redux/modules/post';

const MakePost = (props) => {
    const dispatch = useDispatch()
    const is_login = useSelector((state) => state.user.is_login)
    const preview = useSelector((state) => state.image.preview)
    const {history} = props

    const [contents,setContents] = React.useState("")

    const changeContents = (e) => {
        setContents(e.target.value)

    }

    const addPost = () => {
        dispatch(postActions.addPostFB(contents))
    }



    if(!is_login){ //로그인 했을시에만 작성페이지로 넘어감
        return (
            <Grid margin = "100px 0px" padding = "16px">
                <Text> 앗! 잠깐!</Text>
                <Text>로그인 후에만 글을 쓸 수 있어요!</Text>
                <Button _onClick = {() => {history.replace("/")}} >로그인 하러 가기</Button>
            </Grid>
        )
    }

    return(
        <>
        <Grid padding = '16px' >
        <Text size = '25px' bold >게시글 작성</Text>
            <Upload></Upload>
        </Grid>
        <Grid>
        <Grid>
            <Grid padding = '16px'></Grid>
              <Text margin = '0px' size = '24px' bold>미리보기</Text>
        </Grid>

        <Image shape = 'rectangle'src={preview}/>
        </Grid>

        <Grid padding = "16px">
            <Input _onChange = {changeContents} label = "게시글 내용" placeholder = "게시글작성"  multiLine/>
        </Grid>

        <Grid padding = "16px" >
            <Button _onClick = {addPost} >게시글 작성</Button>
        </Grid>




        </>
    )
}


export default MakePost