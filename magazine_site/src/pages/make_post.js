import React from 'react';
import {Text,Input,Button,Image,Grid,TextArea} from "../elements"
import Upload from '../shared/Upload';

const MakePost = () => {
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

        <Image shape = 'rectangle'/>
        </Grid>

        <Grid padding = "16px">
            <Input label = "게시글 내용" placeholder = "게시글작성"  multiLine/>
        </Grid>

        <Grid padding = "16px" >
            <Button>게시글 작성</Button>
        </Grid>




        </>
    )
}


export default MakePost