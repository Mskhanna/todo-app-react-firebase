import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCj52ExQt8FSic6EyaW1KGPJ2JM-s4mDP0",
  authDomain: "to-do-app-oct24.firebaseapp.com",
  projectId: "to-do-app-oct24",
  storageBucket: "to-do-app-oct24.appspot.com",
  messagingSenderId: "163980868508",
  appId: "1:163980868508:web:e080e790120fee35ea2659",
  measurementId: "G-G7GQDXHN07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
