
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF_jc_UypTdBMC28AwLQjT36LAeF_ZRFA",
  authDomain: "shopilee.firebaseapp.com",
  projectId: "shopilee",
  storageBucket: "shopilee.appspot.com",
  messagingSenderId: "695931342932",
  appId: "1:695931342932:web:b6923ef3feb281ac785dc1",
  measurementId: "G-HQ447TZ8ZG",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
export {  db ,auth };
