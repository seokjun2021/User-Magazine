import firebase from 'firebase/app'
import 'firebase/auth'

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

export { auth,apiKey };








