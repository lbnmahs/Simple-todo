// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_FIREBASE_API_KEY}`,
  authDomain: "simple-todo-app-f38ab.firebaseapp.com",
  projectId: "simple-todo-app-f38ab",
  storageBucket: "simple-todo-app-f38ab.appspot.com",
  messagingSenderId: "168423420007",
  appId: "1:168423420007:web:da6f67029315d7529164c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);