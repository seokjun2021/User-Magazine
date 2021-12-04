import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore' // import 파이어스토어 
import "firebase/storage" // storage불러옴

 const firebaseConfig = {

        apiKey: "AIzaSyCHrUtcJE01MNDrIP-czmhhmtLWtxH5dIo",
        authDomain: "my-magazine-f9c94.firebaseapp.com",
        projectId: "my-magazine-f9c94",
        storageBucket: "my-magazine-f9c94.appspot.com",
        messagingSenderId: "906575634137",
        appId: "1:906575634137:web:b7886c07c67ed128b2e8c8",
        measurementId: "G-61TEQRN0FW",

}
firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey
const auth = firebase.auth();
const firestore = firebase.firestore() // 파이어스토어 연동
const storage = firebase.storage()

export { auth,apiKey,firestore, storage };








