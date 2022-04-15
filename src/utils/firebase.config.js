// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth"

// Your web app's Firebase configuration
const app =  firebase.initializeApp ({
    apiKey: "AIzaSyCceAdnDdug4BYxjpKgUKY9duu5tjEfDtg",
    authDomain: "crud-firebase-9f467.firebaseapp.com",
    projectId: "crud-firebase-9f467",
    storageBucket: "crud-firebase-9f467.appspot.com",
    messagingSenderId: "784424636316",
    appId: "1:784424636316:web:3be7f2d4785ac18c61c259"
});

export const auth = app.auth();
export default app;