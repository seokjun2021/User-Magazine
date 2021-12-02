// import React from "react"
// import Grid from "../elements/Grid"
// import Image from "../elements/image"
// import Text from  "../elements/text" 
import {Grid,Image,Text} from "../elements"
// import 할 것이 너무 많으면 파일을 새로 만들어서 import 한다.


function Post(props){
    
    return(
        <>
            <Grid>
                <Grid is_flex padding = "16px" >
                    <Grid is_flex width ="auto">
                    <Image shape="Circle" src = {props.src}/>
                    <Text bold >{props.user_info.user_name}</Text>
                    </Grid>
                    <Grid is_flex width ="auto">
                    <Text >{props.user_time}</Text>
                    </Grid>
                </Grid>
                <Grid padding = "16px" width ="auto">
                      <Text size ="20px">{props.contents}</Text>

                </Grid>
                <Grid>
                    <Image shape = "rectangle" src = {props.src}/>
                </Grid>
                <Grid padding = "16px">
                    <Text bold >{props.user_like + props.user_like_count}</Text>  
                </Grid>
   
            </Grid>
        </>
    )
}

Post.defaultProps = { // 꼭 필요한 데이터를 defaultProps(props 기본값 지정)에 담아두면  Props가 없을 떼  오류가 나거나 화면이 깨지는 현상 방지
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


export default Post