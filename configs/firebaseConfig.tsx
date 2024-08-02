// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC_5vLZLwpLeOE4HLuSEhc_9Le0JGMMNjQ",
    authDomain: "vineet-kumar-projects.firebaseapp.com",
    projectId: "vineet-kumar-projects",
    storageBucket: "vineet-kumar-projects.appspot.com",
    messagingSenderId: "166378849938",
    appId: "1:166378849938:web:0a0c13722eb678ddda884b",
    measurementId: "G-G6YKCCRRSH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);