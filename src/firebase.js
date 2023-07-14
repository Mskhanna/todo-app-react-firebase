// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBIRfo5yAtIAJAm0E63E65ByCGrcncNmA",
  authDomain: "todo-app-self.firebaseapp.com",
  projectId: "todo-app-self",
  storageBucket: "todo-app-self.appspot.com",
  messagingSenderId: "745667176843",
  appId: "1:745667176843:web:73e8ee8770327b58d3678e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
