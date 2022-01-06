import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZSR0ZMKGVpOOIKvpvA8sv42Vr2wQoIA8",
    authDomain: "reels-29714.firebaseapp.com",
    projectId: "reels-29714",
    storageBucket: "reels-29714.appspot.com",
    messagingSenderId: "1091263401745",
    appId: "1:1091263401745:web:9591da3d316ef5507f06b0",
    measurementId: "${config.measurementId}"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users: firestore.collection('users'),
    posts: firestore.collection('posts'),
    comments: firestore.collection('comments'),
    getTimeStamp: firebase.firestore.FieldValue.serverTimestamp,
}

export const storage = firebase.storage()