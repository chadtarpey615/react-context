import firebase from 'firebase/app';
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDJ8BywAvRUKU3sqEelgaFoJaUN4j1_VVQ",
    authDomain: "unichat-c38b2.firebaseapp.com",
    projectId: "unichat-c38b2",
    storageBucket: "unichat-c38b2.appspot.com",
    messagingSenderId: "719855198279",
    appId: "1:719855198279:web:8ed322360e347920789162"
}).auth();