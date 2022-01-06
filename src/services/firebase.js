import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyB0pIihYGcDcPa4LQhUw5Oh_tLw7IqSgfU",
    authDomain: "chatty-7e700.firebaseapp.com",

    projectId: "chatty-7e700",
    storageBucket: "chatty-7e700.appspot.com",
    messagingSenderId: "1002105247470",
    appId: "1:1002105247470:web:aa63b860197e172c1085ff",
    measurementId: "G-VP3770DPQ9"
  };
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth;
  export const db = firebase.database();