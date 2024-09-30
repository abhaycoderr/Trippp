// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDhBkUiVv9EHHmY4_Ln3vxvX1nWLYTUdO8",
    authDomain: "holidates-c0b86.firebaseapp.com",
    projectId: "holidates-c0b86",
    storageBucket: "holidates-c0b86.appspot.com",
    messagingSenderId: "521191401750",
    appId: "1:521191401750:web:04cdf4a6a8a3c19c698837"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);