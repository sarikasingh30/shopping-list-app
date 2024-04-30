// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from"firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8_FBHMJE3lPjepCfr9lr7sK8IZPuuIQA",
  authDomain: "shopping-list-app-c59a9.firebaseapp.com",
  projectId: "shopping-list-app-c59a9",
  storageBucket: "shopping-list-app-c59a9.appspot.com",
  messagingSenderId: "826900189602",
  appId: "1:826900189602:web:0e1850990ffd2d445862fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB=getFirestore(app)
const auth=getAuth(app)
export {fireDB,auth}