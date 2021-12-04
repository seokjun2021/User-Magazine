import { createAction,handleActions } from "redux-actions";
import produce from "immer";

import {storage} from '../../shared/firebase'

const UPLOADING = 'UPLOADING' // 업로드 중인지 아닌지 구분 
const UPLOAD_IMAGE = "UPLOAD_IMAGE" // 이미지 업로드
const SET_PREVIEW = "SET_PREVIEW" // 이미지 미리보기 

const uploading = createAction(UPLOADING,(uploading) =>({uploading}))
const uploadImage = createAction(UPLOAD_IMAGE,(image_url) =>({image_url}))
const setPreview = createAction(SET_PREVIEW,(preview ) => ({preview}))

const initialState = {
    image_url:'https://w.namu.la/s/45507892b4f48b2b3d4a6386f6dae20c28376a8ef5dfb68c7cc95249ec358e3e68df77594766021173b2e6acf374b79ce02e9eeef61fcdf316659e30289e123fbddf6e5ec3492eddbc582ee5a59a2ff5d6ee84f57ad19277d179b613614364ad',
    uploading: false,
    preview: null,
}

const uploadImageFB =  (image) => { // 업로드 하기
    return function(dispatch,getState,{history}){
        dispatch(uploading(true))
        const _upload = storage.ref(`images/${image.name}`).put(image)
        // 일단 image를 ref를 사용해서 참조하고 put을 사용해서 사진을 업로드 할 수 있다.
         //   업로드!
      _upload.then((snapshot) => {
        console.log(snapshot);

        snapshot.ref.getDownloadURL().then((url) => {// 이미지 링크도 가져오기기
            dispatch(uploadImage(url))
            console.log(url) 
        })
    })
      };
}

export default handleActions({
    [UPLOAD_IMAGE]: (state,action) => produce(state,(draft) => {
        draft.image_url = action.payload.image_url
        draft.uploading = false
    }),
    [UPLOADING]: (state, action) => produce(state,(draft) => {
        draft.uploading = action.payload.uploading
    }),
    [SET_PREVIEW]:(state, action) => produce(state,(draft) => {
        draft.preview = action.payload.preview
    })
}, initialState)

const actionCreators = {
    uploadImage,
    uploadImageFB,
    setPreview,
}

export {actionCreators}