import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

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
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);



// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export {  db ,auth };
