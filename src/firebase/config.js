import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCF5kwowImgUWTVaJCQmyC-by2tdteHPFo",
    authDomain: "ikfram---portfolio.firebaseapp.com",
    projectId: "ikfram---portfolio",
    storageBucket: "ikfram---portfolio.appspot.com",
    messagingSenderId: "1023359859479",
    appId: "1:1023359859479:web:683caafd68e88cbd799552"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp };