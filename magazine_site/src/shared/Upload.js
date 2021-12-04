import React from "react"
import { useDispatch, useSelector } from "react-redux"
import Button from "../../src/elements/button"
import {storage} from "./firebase"

import {actionCreators as imageActions} from '../redux/modules/image'

const Upload = (props) => {
    const dispatch = useDispatch()
    const is_uploading = useSelector(state => state.image.uploading)
    const fileInput = React.useRef()
    

    const selectFile = (e) => {
        console.log(e)
        console.log(e.target)
        console.log(e.target.files[0])

        console.log(fileInput.current.files[0])

        // 프리뷰 기능 제작
        const reader = new FileReader() 
        const file = fileInput.current.files[0]

        reader.readAsDataURL(file) // 파일 읽어오기

        reader.onload = () => { // 읽기가 끝난 후 여기에 넣어준다
            console.log(reader.result) // result는 읽은 파일의 내용물
            dispatch(imageActions.setPreview(reader.result)) // 리덕스의 저장된 파일을 뿌려준다
        }
    }

    const uploadFB = () => {
        let image = fileInput.current.files[0]
    //     const _upload = storage.ref(`images/${image.name}`).put(image)
    //     // 일단 image를 ref를 사용해서 참조하고 put을 사용해서 사진을 업로드 할 수 있다.
    //      //   업로드!
    //   _upload.then((snapshot) => {
    //     console.log(snapshot);

    //     snapshot.ref.getDownloadURL().then((url) => { // 이미지 링크도 가져오기기
    //         console.log(url)
    //     })
    //   });
    dispatch(imageActions.uploadImageFB(image))


    }

    return (
        <>
        <input type = "file" onChange = {selectFile} ref = {fileInput} disabled = {is_uploading}/>
        <Button _onClick = {uploadFB}>업로드 하기</Button>
        </>
    )
}

export default Upload 