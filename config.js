import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBr8dQ6152h6eaIeiooLrucH099y7Xqly4",
  authDomain: "pro-c71-33095.firebaseapp.com",
  projectId: "pro-c71-33095",
  storageBucket: "pro-c71-33095.appspot.com",
  messagingSenderId: "941502257181",
  appId: "1:941502257181:web:d509a2f836e727898b8ef4"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
