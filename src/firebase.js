// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWVLuiV-96ctHydwvOz-KCjfxanWojK3o",
  authDomain: "to-do-app-f94ec.firebaseapp.com",
  projectId: "to-do-app-f94ec",
  storageBucket: "to-do-app-f94ec.appspot.com",
  messagingSenderId: "367925785429",
  appId: "1:367925785429:web:0d56d9367521897f3c75dc",
  measurementId: "G-QY4GL6D6JC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
