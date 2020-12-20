import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD9slddeLmvtzUFaD_mFq2ZfQ2vkXWcAuw",
    authDomain: "adoptar-42af9.firebaseapp.com",
    projectId: "adoptar-42af9",
    storageBucket: "adoptar-42af9.appspot.com",
    messagingSenderId: "916747716192",
    appId: "1:916747716192:web:13df01b199055ca8b0a505",
    measurementId: "G-1RE0PC9HH2"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const storage = firebase.storage();
  
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  const faceAuthProvider = new firebase.auth.FacebookAuthProvider();
  
  
  export { db, storage, googleAuthProvider, firebase, faceAuthProvider}