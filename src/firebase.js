import firebase from "firebase/app"
import "firebase/firestore" 


const firebaseConfig = {
    apiKey: "AIzaSyDOsnW8dMGF6f8WN81Lrh-BvZ-tsDnHZ38",
    authDomain: "facebook-messenger-clone-33284.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-33284-default-rtdb.firebaseio.com",
    projectId: "facebook-messenger-clone-33284",
    storageBucket: "facebook-messenger-clone-33284.appspot.com",
    messagingSenderId: "1074949321543",
    appId: "1:1074949321543:web:d20b9b178ae28e379c5262",
    measurementId: "G-JXHFR61YZ9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db= firebase.firestore()