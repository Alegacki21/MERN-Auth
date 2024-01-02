// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-c2563.firebaseapp.com",
  projectId: "mern-auth-c2563",
  storageBucket: "mern-auth-c2563.appspot.com",
  messagingSenderId: "515907631955",
  appId: "1:515907631955:web:901bd1da07c19294ed3fa6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);